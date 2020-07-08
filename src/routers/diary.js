const express = require("express");
const router = express.Router();
const Diary = require("../models/diary");
const bodyParser = require("body-parser");
const ExerciseData = require("../models/exerciseData");
const Program = require("../models/program");

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  Diary.find({})
    .populate("programId")
    .then((result) => {
      console.log("Tulos : ", result);
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

router.post("/", (req, res, next) => {
  const body = req.body;
  console.log(body);

  Program.findByIdAndUpdate(body._id, body)
    .then((result) => {
      console.log(result);
      res.status(201).send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

module.exports = router;
