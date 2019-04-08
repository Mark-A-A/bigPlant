import axios from "axios";

export const API = {
  getAllPlants: async ()=>{
    return axios.get("/api/plants");

  },
  getComments: function(query) {
    return axios.get("/api/comments", { params: { q: query } });
  }
};
