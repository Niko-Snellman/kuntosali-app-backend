const express = require("express");
const app = express();
require("./db");

const PORT = process.env.PORT;

const programRouter = require("./routers/program");
app.use("/programs", programRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
