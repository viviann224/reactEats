import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    console.log("using utils");
    return axios.get("/api/recipes", { params: { q: query } });
  }
};
