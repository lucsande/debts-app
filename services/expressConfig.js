const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");

module.exports = app => {
  app.use(cors());
  // bodyparser is already a part of express in new versions of express, if we were using an older version, we would require bodyParser and here use app.use(bodyParser.json())
  app.use(express.json());
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
      keys: [process.env.COOKIE_KEY]
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
