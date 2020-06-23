const mongoose = require("mongoose");
const mongodbURL = process.env.MONGODB_URL;

mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
