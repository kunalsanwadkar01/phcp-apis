const mongoose = require("mongoose");
const validator = require("validator");

const yogaSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: false,
  },
  Benefits: {
    type: String,
    required: false,
  },
  Breathing: {
    type: String,
    required: false,
    min: 6,
  },
});

const Yoga = new mongoose.model("Yogaexercise", yogaSchema);
module.exports = Yoga;
