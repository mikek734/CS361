var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async (req, res, next) => {
  var recipeTag = req.query.tags;
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {tags: recipeTag, number: '1'},
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  console.log(JSON.stringify(options));
  axios.request(options)
    .then(function (response) {
      var recipeItem = response.data.recipes.map(item => ({
        id: item.id,
        title: item.title,
        healthscore: item.healthScore,
        weightWatcherPoints: item.weightWatcherPoints,
        sourceUrl: item.sourceUrl,
        imgUrl:item.image,
        creditText: item.sourceName,
        sourceName: item.sourceName,
        vegetarian: item.vegetarian,
        vegan: item.vegan,
        glutenFree: item.glutenFree,
        dairyFree: item.dairyFree,
        veryHealthy: item.veryHealthy,
        cheap: item.cheap,
        veryPopular: item.veryPopular,
        sustainable: item.sustainable,
        lowFodmap: item.lowFodmap,
        spoonacularSourceUrl: item.spoonacularSourceUrl
      }))
      console.log(JSON.stringify(recipeItem));
      res.json(recipeItem);

      console.log(response.data.recipes);
    }).catch(function (error) {
      console.error(error);
    });
});

module.exports = router;