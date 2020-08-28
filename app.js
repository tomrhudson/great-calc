//jshint esversion:6
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + "/"));
app.use(express.static("/css/styles.css"));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/index", function(req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});






app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
