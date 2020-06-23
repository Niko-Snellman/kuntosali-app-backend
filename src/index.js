const express = require("express");
const app = express();
require("./db");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
