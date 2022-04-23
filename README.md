# Style Share

Style Share is a website that allows users to create 3d scenes and use a machine learning model to stylize them according to the style of another image.

## Development Environment

We are using the [yarn package manager](https://yarnpkg.com/) to manage our dependencies. Assuming that ``yarn`` is installed properly and the user is in the base directory, the following commands can be used to install all the packages:
```
yarn install:all
```
This should run a script that installs all dependencies required by the base, client, and server. Once all dependencies have been installed, the following command should call a script to run the client and server:
```
yarn start
```

## Testing 

To run tests, run the following command in the base directory:
```
yarn test:unit
```
This should run a script that runs tests for both the client and the server.
