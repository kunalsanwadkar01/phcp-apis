const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
    min: 6,
  },
  bmi: {
    type: Number,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
