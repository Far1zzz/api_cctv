const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

//import route
const routesCctv = require("./routes/cctv");

//import middleware
app.use("/cctv", routesCctv);

//konek ke db mongo
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let test = mongoose.connection;

app.listen(process.env.PORT, () => {
  console.log(`running in localhost:${process.env.PORT}`);
});

test.on("error", console.error.bind(console, "error brohh"));

test.once("open", () => {
  console.log("connect nah");
});
