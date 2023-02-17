const mongoose = require("mongoose");
const validator = require("validator");

const bodyweightExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
});

const BodyweightExercise = new mongoose.model(
  "Bodyweightexercise",
  bodyweightExerciseSchema
);
module.exports = BodyweightExercise;
