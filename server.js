var express = require("express");
var path = require("path");

var PORT = 3000;
var app = express();

var table;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(port, () => console.log('testing'))


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

// Create New Characters - takes in JSON input
app.post("/tables", function(req, res) {

  var newTable = req.body;

  console.log(newTable);

  table.push(newTable);

  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});