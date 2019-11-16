app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewtables.html"));
  });

  app.get("/makereservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });