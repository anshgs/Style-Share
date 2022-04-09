const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const mongoose = require('mongoose');
const passport = require("passport");

const authRoutes = require("./routes/auth.routes");
const imageRoutes = require("./routes/images.routes");

require("./config/passport");
require("./config/google.js");

require('https').globalAgent.options.rejectUnauthorized = false;

const db = 'mongodb://localhost:27888/style-transfer-db'
mongoose.connect(
  db,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  (error) => {
    if (error) console.log(error)
  }
)

const app = express();

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  }
});

app.disable("x-powered-by");
app.use(multerMid.single("file"));


app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(
  session({
    secret: "verySecretSecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/auth/", authRoutes);
app.use("/api/", imageRoutes);

app.get("/", (req, res) => {
  res.send("hi");
});


// const isLoggedIn = (req, res, next) => {
//   req.user ? next() : res.sendStatus(401);
// };



// app.post('/uploads', async (req, res, next) => {
//   try {
//     const myFile = req.file
//     const imageUrl = await uploadImage(myFile)

//     res
//       .status(200)
//       .json({
//         message: "Upload was successful",
//         data: imageUrl
//       })
//   } catch (error) {
//     next(error)
//   }
// })

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: 'Internal server error!',
  })
  next()
})



app.listen(3000, function () {
  console.log("Style-Transfer API Running on Port 3000");
});