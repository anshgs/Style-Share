const express = require("express");
const passport = require("passport");

require ("../config/passport");

const router = express.Router();

router.get( "/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

router.get("/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/",
        successRedirect: "/"
    })
);

router.get("/logout", (req, res) => {
    req.session.destroy(function () {
        res.clearCookie("connect.sid");
        res.redirect("/");
    });
});

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
};

module.exports = router;