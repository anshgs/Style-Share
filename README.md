# Style Share

Style Share is a website that allows users to create 3d scenes and use a machine learning model to stylize them according to the style of another image. Once styling is complete, users are also given the option to download their images and share them to a gallery.

## Technical Architecture

We're using a React framework with React-Router to redirect between different pages. The website consists of 4 main pages:
- Home Page: a landing page for users
- 3D Editor: a page for users to create and screenshot 3d scenes
- Style Images: a page for users to upload supplementary content or style images
- Results Page: a page that displays the style transfer image and gives users the option to save

The latter three pages are described in more technical detail below.

The backend service and image sharing portion of the project consists of the following:
- Flask Server: micro web framework used to serve pages for image sharing functionality and uploading images
- Google Firebase Firestore Instance: cloud hosted NoSQL database to store user info and image urls
- Google Cloud Storage Bucket Instance: cloud hosted file storage solution used to store images in this scenario

These components are described in greater detail below. 

### 3D Editor

The 3D editor was mainly built using react-three-fiber, which is a React library that integrates the three.js library. This allows the browser to display 3D graphics and also supplies many helper features. The Material UI library was used for the UI component. Using React states, the 3D scene and the UI were able to interact with one another.

### Style Images

Redux was used to pass global data between the different webpages. This allowed users to save a screenshot of their 3D scene, and view it in the style images page. Images are also previewed using React's useEffect hooks.

### Results Page

Once the user has finalized their results and clicked the activate button, they are redirected to the results page. React's useEffect feature is used to run the style transfer on the images before it's eventually displayed. The style transfer is done using a CNN based model with two components, a style prediction network which converts a given image into a vector representing its style, and then a style generating network to combine a style vector and an image into the resulting image. Both portions of the model are implemented and executed using the tensorflowJS library.

### Flask Server
This handles user authentication and meshes the other components of the backend while serving webpages related to uploading images, viewing your images, and the gallery functionality. Using Python and the Flask framework, we are able to develop routes for API calls to upload images, and create routes where webpages are served. For authentication, we are using Google OAuth. With proper client and secret ids, we allow users to log in with a Google account in order to gain access to functionality such as uploading images. 
### Google Firebase Firestore Instance
Once a user is authenticated and logged in, we recieve a user id from Google to identify unique users. This information, along with email, name, and profile picture is then saved into a document into the User collection of our Firestore instance. Additionally, we create an empty document in the Images collection based on user id where we can add images uploaded by the user into an array within the document. From here, we can query the database and find images that a user uploaded, random images uploaded, and data for a user. We are able to perform these operations using the Firebase and Firestore packages from Google.
### Google Cloud Storage Bucket
Images uploaded to the service are stored here. Using the Google Cloud Package for python, we can upload data (images in this case) to our Google Cloud Storage Bucket. A randomly generated file name is created for the image, and then is uploaded to the bucket. We store the url to the image in the Firestore instance. Based on the user that uploaded the image, we can query the Images collection to find the document for that specific user, and append the new image url to their array of images. 

## Development Environment

We are using the [yarn package manager](https://yarnpkg.com/) to manage our dependencies. Assuming that ``yarn`` is installed properly and the user is in the base directory, the following commands can be used to install all the packages:
```
yarn install:all
```
This should run a script that installs all dependencies required by the base and client.
```
yarn start
```


To run the backend service locally, you must have a Google Cloud Platform project initialized, and you must enable API's for Google Cloud Storage, Firebase Firestore, and you must register an OAuth Application. Upon enabling all of these, you must create a service account and generate a ``serviceAccountKeys.json`` file. More information can be found [here](https://cloud.google.com/iam/docs/creating-managing-service-account-keys). Upon adding ``GOOGLE_CLIENT_SECRET``, ``GOOGLE_CLIENT_ID``, ``creds.json`` (your service account), and ``STORAGE_BUCKET_NAME`` to your environment variables, you will be able to run the server. This will install all the required dependencies.
```
pip install -r config/requirements.txt
```

From there, run ``export FLASK_APP=server.py`` and ``flask run`` to start the server. This assumes a linux environment is being used to run the server. 

Additionally, a dockerfile is provided if you would rather build the application in a containerized manner. Simply run the following to build the image.
```
docker build -t style-transfer-server .
```
And run the following to start the service on port 5000.
```
docker run -p 5000:5000 -d style-transfer-server
```
## Testing

Tests are written using Enzyme/Mocha/Chai. To run tests, run the following command in the base directory:
```
yarn test:unit
```
This will run a script for the client side tests.

The backend was tested using PostMan. We did this by making bogus and valid requests to the server. The aspects of the server we tested included authorization to use a specific route, such as uploading an image. We were able to test this by imitating a user through cookies. By supplying PostMan a valid and invalid cookie, we were able to test this functionality.

## Group Members

This project was completed by Albert Xiao, Ansh Sharma, Jeffrey Liu, and Rohit Kundu as our CS-222 project. Although we did a lot of work collaboratively, our main individual roles were:
- Albert worked on the frontend and testing suite
- Ansh worked on the machine learning model
- Jeffrey worked on the 3D editor
- Rohit worked on the backend and image gallery
