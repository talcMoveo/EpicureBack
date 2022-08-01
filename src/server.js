const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const apiRouter = require("../routers/apiRouter").apiRouter;

const app = express();
app.use(express.json());

const username = "talcohen111";
const password = "Talco309!";
const cluster = "cluster0.mu90v";
const dbName = "epicure";

const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

let corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", cors(corsOptions), apiRouter);

app.listen(3000, () => console.log("connected"));
