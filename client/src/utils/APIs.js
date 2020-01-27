import axios from "axios";

export default {
  searchBooks : function(name) {
    return axios.get("/api/book/search?name="+name);
  }
};