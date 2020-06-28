const express = require("express");
const router = express.Router();
const Diary = require("../models/diary");
const bodyParser = require("body-parser");
const { response } = require("express");

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  /*Program.find({})
    .then((programs) => {
      res.send(programs);
    })
    .catch((error) => {
      res.status(500).send(error);
    });*/
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const exercises = req.body.exercises;
  const body = req.body;
  const diaryArray = [];

  exercises.forEach((e) => {
    const diaryItem = {
      programId: body.programId,
      completionDate: body.completionDate,
      sets: e.sets,
      reps: e.reps,
      weights: e.weights,
    };

    const diary = new Diary(diaryItem);
    diaryArray.push(diary);
  });

  console.log(diaryArray);

  Diary.collection
    .insertMany(diaryArray)
    .then(() => {
      res.status(201).send(diaryArray);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

module.exports = router;
