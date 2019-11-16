var express = require("express");
var path = require("path");

var PORT = 3000;

var app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

