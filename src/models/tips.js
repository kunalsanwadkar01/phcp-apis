const mongoose = require("mongoose");
const validator = require("validator");

const tipsSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  Tips_title: {
    type: String,
    required: true,
  },
  Disease_name: {
    type: String,
    required: true,
  },
  tip_image: {
    type: String,
    required: true,
  },
  tip: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Tips = new mongoose.model("Tips", tipsSchema);
module.exports = Tips;
