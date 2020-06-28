const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  programId: {
    type: String,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
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
});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;
