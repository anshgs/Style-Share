# Style Share

Style Share is a website that allows users to create 3d scenes and use a machine learning model to stylize them according to the style of another image. Once styling is complete, users are also given the option to download their images and share them to a gallery.

## Technical Architecture

We're using a React framework with React-Router to redirect between different pages. The website consists of 4 main pages:
- Home Page: a landing page for users
- 3D Editor: a page for users to create and screenshot 3d scenes
- Style Images: a page for users to upload supplementary content or style images
- Results Page: a page that displays the style transfer image and gives users the option to save
The latter three pages are described in more technical detail below.

### 3D Editor

The 3D editor was mainly built using react-three-fiber, which is a React library that integrates the three.js library. This allows the browser to display 3D graphics and also supplies many helper features. The Material UI library was used for the UI component. Using React states, the 3D scene and the UI were able to interact with one another.

### Style Images

Redux was used to pass global data between the different webpages. This allowed users to save a screenshot of their 3D scene, and view it in the style images page. Images are also previewed using React's useEffect hooks.

### Results Page

Once the user has finalized their results and clicked the activate button, they are redirected to the results page. React's componentDidMount feature is used to run the style transfer on the images before it's eventually displayed. The style transfer is done usin the Tensorflow.js library.

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

Tests are written using Enzyme/Mocha/Chai. To run tests, run the following command in the base directory:
```
yarn test:unit
```
This should run a script that runs tests for both the client and the server.

## Group Members

This project was completed by Albert Xiao, Ansh Sharma, Jeffrey Liu, and Rohit Kundu as our CS-222 project. Although we did a lot of work collaboratively, our main individual roles were:
- Albert worked on the frontend and testing suite
- Ansh worked on the machine learning model
- Jeffrey worked on the 3D editor
- Rohit worked on the backend and image gallery
