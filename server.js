// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var count = 0;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// user information need to reserver table
var reservation = {
    name: "john doe",
    phone: 030356565,
    email: "du@gmail.com",
    id: 1
}

var waitlist = {
  name: "john doe",
    phone: 030356565,
    email: "du@gmail.com",
    id: 1
}
// routes

/*
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });*/

  //Displays all tables and waitlist

  app.get("/api/tables", function(req, res) {
    return res.json(reservation);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  // input date to reservation if for 2 tables but rest for waitlist

