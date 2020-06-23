const mongoose = require("mongoose");

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
  exercises: [
    {
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
    },
  ],
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
