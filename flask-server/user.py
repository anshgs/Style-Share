from flask_login import UserMixin

import firestore_db as fdb

class User(UserMixin):
    def __init__(self, id_, name, email, profile_pic):
        self.id = id_
        self.name = name
        self.email = email
        self.profile_pic = profile_pic

    @staticmethod
    def get(id_):
        user = fdb.get_user(id_)
        if user is None:
            return None
        else:
            return User(user["id"], user["name"], user["email"], user["profile_pic"])
    
    @staticmethod
    def create_user(id_, name, email, profile_pic):
        fdb.create_user(id_, name, email, profile_pic)
    