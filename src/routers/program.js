const express = require("express");
const router = express.Router();
const Program = require("../models/program");

router.get("/", (req, res, next) => {
  res.send({ foo: "bar" });
});

router.post("/", (req, res, next) => {
  console.log(req.body);

  res.send({ terve: "hello" });
});

module.exports = router;
