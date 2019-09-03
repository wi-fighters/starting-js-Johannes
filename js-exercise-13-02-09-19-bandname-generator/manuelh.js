const arrBandNames = [];

function generateBandName(clothingColour, lastFoodEaten) {
  let clothingColorFirst = clothingColour.charAt(0).toUpperCase();
  let clothingColorRest = clothingColour.substr(1).toLowerCase();
  // you could shorten the code a bit by typing
  // let color = clothingColour[0].toUpperCase() + clothingColour.substr(1).toLowerCase();
  // you could also outsource the code as a function
  let lastFoodEatenFirst = lastFoodEaten.charAt(0).toUpperCase();
  let lastFoodEatenRest = lastFoodEaten.substr(1).toLowerCase();

  //that would make these two lines unnecessary as well
  let color = `${clothingColorFirst}${clothingColorRest}`;
  let food = `${lastFoodEatenFirst}${lastFoodEatenRest}`;

  let bandName = `The ${color} ${food}`;

  arrBandNames.push(bandName);

  console.log(arrBandNames);

  return bandName;
}

console.log(generateBandName("green", "sausage"));
