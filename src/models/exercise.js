const mongoose = require("mongoose");
const ExerciseData = require("./exerciseData");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  sets: {
    type: Number,
    required: false,
    validate(value) {
      if (value < 1) {
        throw new Error("Sets must be more than 0");
      }
    },
  },
  reps: {
    type: Number,
    required: false,
    validate(value) {
      if (value < 1) {
        throw new Error("Reps must be more than 0");
      }
    },
  },
  weights: {
    type: Number,
    required: false,
    validate(value) {
      if (value < 1) {
        throw new Error("Weights must be more than 0");
      }
    },
  },
  exerciseData: [ExerciseData.schema],
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
