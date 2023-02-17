const mongoose = require("mongoose");
const validator = require("validator");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
    min: 6,
  },
  degree: {
    type: Array,
    required: true,
  },
  doctorType: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
