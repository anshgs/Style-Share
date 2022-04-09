const passport = require("passport");
const User = require("../user/user.model");

require('https').globalAgent.options.rejectUnauthorized = false;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currentUser = await User.findOne({ id });
  done(null, currentUser);
});