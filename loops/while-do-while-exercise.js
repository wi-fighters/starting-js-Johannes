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

// const arrNumbers = [3, 5, 9, 2, 11, 13];
// let index = 0;
// let arrSum = 0;

// do {
//   console.log(`\n${arrSum} + ${arrNumbers[index]} =`);
//   arrSum = arrSum + arrNumbers[index];
//   console.log(arrSum);
//   ++index;
// } while (arrNumbers[index] != undefined);

//2.
// let numbers = 1;
// let arrSum = 0;

// do {
//   console.log(`\n${arrSum} + ${numbers} =`);
//   arrSum = arrSum + numbers;
//   console.log(arrSum);
//   ++numbers;
// } while (numbers <= 20);

// console.log("\nDone!");

//3.
const arrNames = [
  "steffi",
  "hannes",
  "eva",
  "jaime",
  "sausage",
  "dr doom death"
];
console.log(arrNames);
let index = 0; // 1

while (typeof arrNames[index] !== "undefined") {
  capFirstLetter =
    arrNames[index][0].toUpperCase() + arrNames[index].substring(1);
  arrNames[index] = capFirstLetter;

  if (arrNames[index].includes(" ")) {
    let indexMulti = 1;
    let arrMultiName = capFirstLetter.split(" ");

    console.log(
      `There is at least one space in the name ${capFirstLetter}, so I went ahead and capitalised the next word(s) as well.`
    );

    do {
      let capFirstLetterMulti =
        arrMultiName[indexMulti][0].toUpperCase() +
        arrMultiName[indexMulti].substring(1);

      arrMultiName[indexMulti] = capFirstLetterMulti;
      capFirstLetter = arrMultiName.join(" ");
      arrNames[index] = capFirstLetter;

      ++indexMulti;
    } while (typeof arrMultiName[indexMulti] !== "undefined");
  }
  ++index;
}

console.log(arrNames);

//5.
// const item = "The End is Nigh.";
// let times = 4;

// do {
//   console.log(item);
//   --times;
// } while (times > 0);

// console.log("\nThe End is Here.");

//Bonus
// const arrFactors = [2, 4, 8, 16, 32];
// let index = 0;

// do {
//   isFactor = calcFactor(arrFactors[index], arrFactors[index + 1]);
//   ++index;
// } while (isFactor && typeof arrFactors[index + 1] !== "undefined");

// console.log(`${arrFactors} is a factor chain: ${isFactor}`);

// function calcFactor(firstNum, secondNum) {
//   return secondNum % firstNum === 0;
// }
