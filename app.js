const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/ToDo";
const app = express();
mongoose.connect(url, { useNewUrlParser: true });
const conn = mongoose.connection;
conn.on("open", function () {
  console.log("connected");
});
app.use(express.json());
const todo = require("./routes/todos");
app.use("/todos", todo);
app.listen(5703, function () {
  console.log("Server started");
});
