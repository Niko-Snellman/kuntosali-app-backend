const mongoose = require("mongoose");
const Exercise = require("./exercise");

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: false,
    trim: false,
  },
  exercises: [Exercise.schema],
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
