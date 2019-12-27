const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    if (req.user) res.send(req.user);

    res.send("You are not currently logged in");
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send("You've been successfully logged out");
  });
};
