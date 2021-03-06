import json, os
import image as img
import firestore_db as fdb
import requests

from dotenv import load_dotenv

from flask import Flask, redirect, render_template, request, url_for
from oauthlib.oauth2 import WebApplicationClient
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from user import User
from flask_cors import CORS

load_dotenv()

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

app = Flask(__name__)

CORS(app)

app.secret_key = os.urandom(24)

login_manager = LoginManager()
login_manager.init_app(app)

client = WebApplicationClient(GOOGLE_CLIENT_ID)

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)


@app.route("/")
def index():
    return render_template("home.html", **get_data())   


@app.route("/login")
def login():
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]

    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )

    return redirect(request_uri)


@app.route("/login/callback")
def callback():
    code = request.args.get("code")

    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]

    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code
    )

    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )

    client.parse_request_body_response(json.dumps(token_response.json()))

    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]
        users_email = userinfo_response.json()["email"]
        picture = userinfo_response.json()["picture"]
        users_name = userinfo_response.json()["given_name"]
    else:
        return "User email not available or not verified by Google.", 400
    
    user = User(id_ = unique_id, name = users_name, email = users_email, profile_pic = picture)

    if not User.get(unique_id):
        user.create_user(unique_id, users_name, users_email, picture)
    
    login_user(user)

    return redirect(url_for("upload"))


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("index"))


def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()


@app.route("/user/upload", methods=["POST"])
def upload():
    if request.method != "POST":
        return "Not allowed", 405

    if current_user.is_authenticated:
        picture = request.files['picture']
        url = img.upload_to_bucket(picture)

        user_id = current_user.id
        fdb.create_image(user_id, url)

        return redirect(url_for("user_upload"))
    
    redirect("/login")


@app.route("/gallery")
def return_gallery():
    images = fdb.get_random_image(9)

    return render_template("gallery.html", images = images, **get_data())


@app.route("/user/images")
def return_user_images():
    if not current_user.is_authenticated:
        return redirect("/login")
    
    user_id = current_user.id
    images = fdb.get_user_images(user_id)["images"]

    return render_template("userview.html", images = images, **get_data())


@app.route("/user/upload")
def user_upload():
    if not current_user.is_authenticated:
        return redirect("/login")
    
    return render_template("userupload.html", **get_data())


def get_data():
    is_auth = current_user.is_authenticated
    if is_auth:
        return {
            "authenticated": is_auth,
            "user": current_user.id,
            "user_name": current_user.name,
            "user_email": current_user.email,
            "user_profile_pic": current_user.profile_pic
        }
    else :
        return {
            "authenticated": is_auth
        }


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)