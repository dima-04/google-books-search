var db = require("../models");

module.exports = function (app) {

  app.get('/api/books/saved', function(req, res) {
    db.Book.find().then(books => res.send(books));
  });
}