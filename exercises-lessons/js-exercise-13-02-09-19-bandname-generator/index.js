// create glbal array
let globalBandNameArray = [];

function generateBandName(clothingColor, lastFoodEaten) {
  // declare the return variable and indicate its type
  let bandName = "";

  //removed statements to functions
  color = capitalizeFirstLetter(clothingColor);
  food = capitalizeFirstLetter(lastFoodEaten);

  // use the formatted inputs to build the return value
  bandName = `The ${color} ${food}!`;
  globalBandNameArray = [color, food];

  // keep the return line short and sweet
  return bandName;
}

//build a function that works with both arguments, less code = good
function capitalizeFirstLetter(partOfName) {
  return partOfName[0].toUpperCase() + partOfName.substr(1).toLowerCase();
}

console.log(generateBandName("blACK", "spAGhetti"));
//print global array
console.log(globalBandNameArray);
