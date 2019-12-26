const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model("User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    // (accessToken, refreshToken, profile, done) => {
    //   console.log("accesstoken: ", accessToken);
    //   console.log("profile: ", profile);
    //   console.log("done: ", done);
    // }
    async (accessToken, refreshToken, profile, done) => {
      const foundUser = await User.findOne({ googleId: profile.id });

      if (foundUser) {
        return done(null, foundUser);
      }

      const newUser = await new User({
        googleId: profile.id,
        firstName: profile.givenName,
        lastName: profile.familyName,
        email: profile.emails[0].value
      });

      return done(null, newUser);
    }
  )
);
