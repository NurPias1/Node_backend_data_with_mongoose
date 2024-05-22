const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./Routes/user.route");
require("./config/db");
//
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//route line
app.use("/api/user", userRoute);



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Views/index.html");
});

//route not found
app.use((req, res, next) => {
  res.status(404).json({ massage: "wrong Route" });
});
//Server error
app.use((err, req, res, next) => {
  res.status(500).json({ massage: "Broken" });
});
module.exports = app;
