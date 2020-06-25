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

module.exports = router;
