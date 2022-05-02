import random
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("./config/creds.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

user_ref = db.collection(u'users')
image_ref = db.collection(u'images')

def create_user(id_, name, email, profile_pic):
    user_ref.document(id_).set({
        u'id': id_,
        u'name': name,
        u'email': email,
        u'profile_pic': profile_pic
    })

    image_ref.document(id_).set({"id": id_, "image_url": []})

    return True

def get_user(id_):
    doc = user_ref.document(id_).get()
    return doc.to_dict()

def create_image(id_, image_url):
    # if document doesnt exist, create it
    if not image_ref.document(id_).get().exists:
        image_ref.document(id_).set({
            u'id': id_,
            u'image_url': [image_url]
        })
    else:
        image_ref.document(id_).update({u'image_url': firestore.ArrayUnion([image_url])})

    return True

def get_image(id_):
    doc = image_ref.document(id_).get()
    return doc.to_dict()

def get_all_users():
    all_users = []
    for user in user_ref.stream():
        all_users.append(user.to_dict())

    return {"users": all_users}

def get_all_images():
    all_images = []
    for image in image_ref.stream():
        for url in image.to_dict()['image_url']:
            all_images.append(url)

    return {"images": all_images}

def get_random_image(num):
    images = get_all_images()["images"]

    if len(images) < num:
        return images
    
    random_images = []
    while len(random_images) < num:
        random_index = random.randint(0, len(images) - 1)
        random_images.append(images[random_index])

    return random_images

def get_user_images(id_):
    images = get_image(id_)["image_url"]

    return {"images": images}