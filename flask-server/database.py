# '''
# NOT USED ANYMORE, using Firebase Firestore for storing data
# '''

# from pymongo import MongoClient

# client = MongoClient("mongodb://localhost:27888")

# db = client.style_transfer

# users = db.users
# image = db.images

# def get_user(id_):
#     return users.find_one({"id": id_})

# def create_user(id_, name, email, profile_pic):
#     users.insert_one({"id": id_, "name": name, "email": email, "profile_pic": profile_pic})
#     return True

# def get_image(id_):
#     return image.find_one({"id": id_})


# def create_image(id_, name, image_url):

#     image.insert_one({"id": id_, "image_url": image_url, "name": name})
#     return True

# def get_all_images():
#     all_images = []
#     for image in image.find({}, {"_id": 0}):
#         all_images.append(image)

#     return {"images": all_images}

# def get_all_users():
#     all_users = []
#     for user in users.find({}, {"_id": 0}):
#         all_users.append(user)

#     return {"users": all_users}