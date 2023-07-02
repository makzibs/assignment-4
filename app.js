const express = require('express');

// Create an Express app
const app = express();

app.set('view engine', 'pug');



// Define the GET route for retrieving recipes
app.get('/recipe/:food', (req, res) => {
  // Retrieve the food parameter from the URL
  const food = req.params.food;

  // Define the recipe object
  const recipe = {
    name: food,
    instructions: ['Step 1', 'Step 2', 'Step 3'],
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
  };

  // Send the recipe as a JSON response
  //res.render('index', {recipe});
  res.send(recipe);
  console.log(recipe);
  
  
});

app.get('/', (req, res) => {
  // Retrieve the food parameter from the URL
  

  // Define the recipe object
  const recipe = {
    name: "Pizza",
    instructions: ['Step 1', 'Step 2', 'Step 3'],
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
  };

  // Send the recipe as a JSON response
  
  res.render('index', { recipe });
  
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});