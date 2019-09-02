// create glbal array
let globalBandNameArray = [];
console.log(globalBandNameArray);

function generateBandName(clothingColor, lastFoodEaten) {
  //removed bandName declaration to shorten code

  //removed statements to functions
  const color = makeTasty(
    clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase()
  );
  const food =
    lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();

  // use the formatted inputs to build the return value
  let bandName = `The ${color} ${food}!`;
  globalBandNameArray = [color, food];

  // keep the return line short and sweet
  return bandName;
}

//build a function that works with both arguments, less code = good
function capitalizeFirstLetter(partOfName) {
  return partOfName[0].toUpperCase() + partOfName.substr(1).toLowerCase();
}

function makeTasty(color) {
  let tastyColor = "";

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
