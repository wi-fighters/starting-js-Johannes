// create glbal array
let globalBandNameArray = [];

function generateBandName(clothingColor, lastFoodEaten) {
  // declare the return variable and indicate its type
  let bandName = "";

  //removed statements to functions
  color = capitalizeColor(clothingColor);
  food = capitalizeFood(lastFoodEaten);

  // use the formatted inputs to build the return value
  bandName = `The ${color} ${food}!`;
  globalBandNameArray = [color, food];

  // keep the return line short and sweet
  return bandName;
}

//function for color part of name, also shortened it a bit
function capitalizeColor(clothingColor) {
  return clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase();
}

//function for food part of name, also shortened it a bit
function capitalizeFood(lastFoodEaten) {
  return lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();
}

console.log(generateBandName("blACK", "spAGhetti"));
//print global array
console.log(globalBandNameArray);
