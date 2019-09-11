//https://www.w3schools.com/js/js_function_closures.asp

// var add = (function() {
//   var counter = 0;
//   return function() {
//     counter += 1;
//     console.log();
//     return counter;
//   };
// })();
// console.log(add);
// console.log(add());
// console.log(add());
// console.log(add());

//https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/

// function setLocation(city) {
//   var country = "Germany";

//   function printLocation() {
//     console.log(
//       "You are in " + city + ", " + country + ". Congratulations, dude."
//     );
//   }

//   printLocation();
// }

// setLocation("Berlin");

function setLocation(city) {
  var country = "France";

  function printLocation() {
    console.log("You are in " + city + ", " + country);
  }

  return printLocation;
}

var currentLocation = setLocation("Paris");
//at this point, currentLocation = "console.log("You are in...")":
console.log(currentLocation);
currentLocation(); // output: You are in Paris, France
