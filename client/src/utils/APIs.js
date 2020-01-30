import axios from "axios";

export default {
  searchBooks: function (name) {
    return axios.get("/api/book/search?name=" + name);
  },
  saveBooks: function (id) {
    return axios.post("/api/book/save", {
      id: id
    })
  },
  deleteBook: function (id) {
    return axios.delete("/api/book/" + id);
  },
  getSavedBooks: function () {
    return axios.get("/api/books/saved");
  }

};