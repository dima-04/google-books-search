require("dotenv").config();
var axios = require("axios");
var keys = require("../config/apiKeys");
var db = require("../models");

module.exports = function (app) {

  app.get('/api/book/search', function (req, res) {
    console.log("https://www.googleapis.com/books/v1/volumes?q=" + req.query.name + "&key=" + keys.apiKeys.googleAPIKey);
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.name + "&key=" + keys.apiKeys.googleAPIKey).then(function (response) {
      books = response.data.items.map(item => {
        return {
          _id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks.thumbnail,
          link: item.volumeInfo.previewLink,
          language: item.volumeInfo.language
        }
      });
      res.send(books);
    });
  });

  app.post('/api/book/save', function (req, res) {
    axios.get("https://www.googleapis.com/books/v1/volumes/" + req.body.id + "?key=" + keys.apiKeys.googleAPIKey).then(function (response) {
      
      db.Book.create({
        _id: response.data.id,
        title: response.data.volumeInfo.title,
        authors: response.data.volumeInfo.authors,
        description: response.data.volumeInfo.description,
        image: response.data.volumeInfo.imageLinks.thumbnail,
        link: response.data.volumeInfo.previewLink,
        language: response.data.volumeInfo.language
      });
      res.send("Saved");
    });
  });
}

