const express = require("express");
var cors = require("cors");
const app = express();
require("./db");

app.use(cors());

const PORT = process.env.PORT;

const programRouter = require("./routers/program");
app.use("/programs", programRouter);

const diaryRouter = require("./routers/diary");
app.use("/diary", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
