let globalBandNameArray = [];

function generateBandName(clothingColor, lastFoodEaten) {
  const color = makeTasty(
    clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase()
  );
  const food =
    lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();

  let bandName = `The ${color} ${food}!`;
  globalBandNameArray = [color, food];

  return bandName;
}

function makeTasty(color) {
  let tastyColor;

  switch (color) {
    case "Red":
      tastyColor = "Chilli";
      break;
    case "Orange":
      tastyColor = "Tangerine";
      break;
    case "Yellow":
      tastyColor = "Pineapple";
      break;
    case "Green":
      tastyColor = "Sage";
      break;
    case "Blue":
      tastyColor = "Blueberry";
      break;
    case "Purple":
      tastyColor = "Plum";
      break;
    default:
      tastyColor = color;
  }

  return tastyColor;
}

console.log(generateBandName("purple", "spAGhetti"));
// //print global array
console.log(globalBandNameArray.toString());
