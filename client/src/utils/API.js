import axios from "axios";

export default {
  getComments: function(query) {
    return axios.get("/api/comments", { params: { q: query } });
  }
};
