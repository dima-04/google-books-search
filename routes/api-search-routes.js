module.exports = function(app) {

  app.get('/api/book/search', function(req, res) {
    res.send(req.query);
  });
}