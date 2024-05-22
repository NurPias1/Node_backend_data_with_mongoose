const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;


mongoose
  .connect(dbURL)

  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));
