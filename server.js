const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

passport.use(new GoogleStrategy());
app.use(cors());
// bodyparser is already a part of express in new versions of express, if we were using an older version, we would require bodyParser and here use app.use(bodyParser.json())
app.use(express.json());
app.use(express.static("client/build"));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRouter = require("./routes/users");
const debtRouter = require("./routes/debts");
const contactRouter = require("./routes/contacts");

app.use("/users", userRouter);
app.use("/debts", debtRouter);
app.use("/contacts", contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
contact;
