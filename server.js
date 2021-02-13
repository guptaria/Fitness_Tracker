var express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Static directory
app.use(express.static("public"));

// Setting up the connection

mongoose.connect("mongodb://localhost/WorkoutTracker", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
});

// Routes

require("./routes/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);

//starting our Express app

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

