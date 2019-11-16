var reserv = require("reservation");
var wait = requite("waitlist");

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });