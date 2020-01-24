var db = require("../models");

module.exports = function(app) {
  // Get all highscores for level by levelID
  app.get("/api/highscores/:levelid", function(req, res) {
    let levelID = parseInt(req.params.levelid);

    db.Highscores.findAll({ where: {
      levelid: req.params.levelid
      },
      order: [
        ['score', 'DESC']
      ] }).then(function(result) {
      res.json(result);
    });
    
  });

  // Create a new example
  app.post("/api/highscores", function(req, res) {
    db.Highscores.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Highscores.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};


