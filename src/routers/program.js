const express = require("express");
const router = express.Router();
const Program = require("../models/program");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  Program.find({})
    .then((programs) => {
      res.send(programs);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.post("/", (req, res, next) => {
  console.log(req.body);

  const program = new Program(req.body);

  program
    .save()
    .then(() => {
      res.status(201).send(program);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

router.delete("/", (req, res, next) => {
  const id = req.body.id;

  Program.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

module.exports = router;
