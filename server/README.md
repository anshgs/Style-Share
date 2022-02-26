# Style Share Backend

## Set-up Process

We are using express to manage the backend of this application. Assuming ``yarn`` is set up properly and the dependencies are all met, we can run the backend server by itself using ``yarn start``.

To run locally, you would need to have MongoDB installed locally. Instead of installing it, we can use docker to pull an image and we can access the MongoDB instance from there. To do this, run the following commands:

```
docker pull mongo
docker run -p 27888:27017 mongo
```

The first command pulls a container with MongoDB, and the second command exposes the localhost port ``27888`` to the container port ``27017`` which is the port used to access the database.