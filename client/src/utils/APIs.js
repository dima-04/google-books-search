import axios from "axios";

export default {
  searchBooks: function (name) {
    return axios.get("/api/book/search?name=" + name);
  },
  saveBooks: function (id) {
    return axios.post("/api/book/save", {
      id: id
    })
  }
};