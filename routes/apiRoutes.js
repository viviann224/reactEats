const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  console.log("starting the routing for ricepuppy finished!");
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
    console.log("calling the routing for ricepuppy finished!");

});


module.exports = router;
