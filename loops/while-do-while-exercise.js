//WHILE LOOPS

// 1.

// const i = 1;

// while (i < 15) {
//   console.log("hey");
// }

//2.
// const arrCities = ["Berlin", "Paris", "Prague", "Rome"];

// let stringCities = "";
// console.log(arrCities);

// while (arrCities[0] != undefined) {
//   stringCities = stringCities + arrCities.shift();
//   if (arrCities[0] != undefined) {
//     stringCities = stringCities + ", ";
//   }
//   console.log(arrCities);
//   console.log(stringCities);
// }

//Jaime's solution

// const cityNames = [
//   "Madrid",
//   "Málaga",
//   "Bilbao",
//   "Barcelona",
//   "Sevilla",
//   "Granada"
// ];
// let i = 0;
// let myCities = "";
// let comma = ", ";

// while (i < cityNames.length) {
//   myCities += cityNames[i] + comma;
//   ++i;
// }

// console.log(myCities);

//3.

// const numbers = [1, 2, 3, 4, 5];
// let index = 0;
// console.log(numbers);

// while (numbers[index] != undefined) {
//   if (isEven(index)) {
//     --numbers[index];
//   } else {
//     ++numbers[index];
//   }
//   ++index;
// }

// console.log(numbers);

// function isEven(num) {
//   return num % 2 === 0;
// }

//DO WHILE LOOPS

//1.

const arrNumbers = [3, 5, 9, 2, 11, 13];
let index = 0;
let arrSum = 0;

do {
  console.log(`\n${arrSum} + ${arrNumbers[index]} =`);
  arrSum = arrSum + arrNumbers[index];
  console.log(arrSum);
  ++index;
} while (arrNumbers[index] != undefined);
