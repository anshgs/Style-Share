# Style Share Backend

## Set-up Process

We initally were using Node.js and Express, but we decided to pivot to using Python and the Flask micro webservice framework to create a more robust API and backend service. This allowed us to have more flexibility through development, and reduced the complexity of the project itself. 

This service relies heavily on the Google Cloud Platform. It uses a Firebase Firestore instance to store data regarding users and the images they upload, and it utilizes a Cloud Storage Bucket in order to store the images that are uploaded to the service. To properly run this on your own, you will need to register a project within the Google Cloud Platform, and intialize the necessary API's for Cloud Storage and Firebase Firestore. 

Assuming a valid installation of python3 and pip, we can install the necessary dependencies using ``pip install -r config/requirements.txt`` to install everything. This will install the necessary packages to run the server. From there, we have run ``export FLASK_APP=server.py``, and then ``flask run`` in order to run the server. This will run on ``port 5000`` by default. 

If you would like a more streamlined installation process, you can build the Docker image located at the root of the folder. This will create a container which will have the necessary dependencies while running the server. Assuming a proper docker installation, we can run ``docker build -t style-transfer-server .`` to create and build the image. And to run it within the container, we run ``docker run -p 5000:5000 -d style-transfer-server``.