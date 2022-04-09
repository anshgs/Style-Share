const express = require("express");
const uploadImage = require("../helpers/helpers");

const router = express.Router();

router.post("/uploads", async (req, res, next) => {
    try {
        const myFile = req.file
        const imageUrl = await uploadImage(myFile)
    
        res
          .status(200)
          .json({
            message: "Upload was successful",
            data: imageUrl
          })
      } catch (error) {
        next(error)
      }
})

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
};


module.exports = router;