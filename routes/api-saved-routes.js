var db = require("../models");

module.exports = function (app) {

  app.get('/api/books/saved', function(req, res) {
    db.Book.find().then(books => res.send(books));
  });

  app.delete('/api/book/:id', function (req, res) {
    db.Book.findOne({_id: req.params.id}).then(function(response) {
      response.remove();
      res.send("Deleted!");
    });
  });
}