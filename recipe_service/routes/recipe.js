var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async (req, res, next) => {
  var recipeTag = req.query.tag;
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {tags: recipeTag, number: '1'},
    headers: {
      'X-RapidAPI-Key': '38d5398e1bmsh14d5ca8ef21f3c9p1d030fjsn7f27c6e84cc3',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  console.log(JSON.stringify(options));
  axios.request(options)
    .then(function (response) {
      var recipeItem = response.data.recipes.map(item => ({
        id: item.id,
        healthscore: item.healthScore,
        sourceUrl: item.sourceUrl,
        title: item.title,
        imgUrl:item.image,
        letsDoItURL: item.letsDoItURL,
        creditText: item.sourceName
      }))
      console.log(JSON.stringify(recipeItem));
      res.json(recipeItem);

      console.log(response.data.recipes);
    }).catch(function (error) {
      console.error(error);
    });
});

module.exports = router;