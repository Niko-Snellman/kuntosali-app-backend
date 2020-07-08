const mongoose = require("mongoose");

const exerciseDataSchema = new mongoose.Schema({
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
  completionDate: {
    type: Date,
    required: true,
  },
});

const ExerciseData = mongoose.model("ExerciseData", exerciseDataSchema);

module.exports = ExerciseData;
