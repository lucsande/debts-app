const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
