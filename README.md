# CS361

# Recipe Microservice Communication Contract
This is a microservice that is to be utilized for receiving a random recipe that matches a set of desired input tags. The recipe will be returned as a JSON object.

```bin/www``` contains the desired port number.
```routes/recipe.js``` contains the route for requesting data from the recipe API.

# Install and Run
Download the provided code and run the following:

```
npm install
```
```
npm start
```

# Request Data
Use an HTTP GET request with a qualifying tag to request data:
```GET /?tags={breakfast}```
```
await fetch('http://localhost:3000/?tags=breakfast')
```

# Data Response
The recipe data will be returned to the user as a JSON object

```
[{"id":642096,"title":"Easy Shrimp Scampi","healthscore":5,"sourceUrl":"http://www.foodista.com/recipe/PVM55SR7/shrimp-scampi","imgUrl":"https://spoonacular.com/recipeImages/642096-556x370.jpg","creditText":"Foodista","sourceName":"Foodista","vegetarian":false,"vegan":false,"glutenFree":true,"dairyFree":false,"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,"lowFodmap":false}]
```
