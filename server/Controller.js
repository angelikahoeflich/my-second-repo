const ingredientsList = require('./Ingredients.json');
let list =[];

module.exports = {
    
  getIngredients: (req, res) => {
    let foodArr = [];
    foodArr.push(ingredientsList.ingredients.staples)
    res.status(200).send(foodArr)
  },

  addToList: (req, res) => {
    
  },
  editListIngredients: (req, res) => {
    
  },
  removeFromList: (req, res) => {
    
  }

}