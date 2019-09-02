// const day = new Date().getDay();

// console.log(day);

// switch (day) {
//   case 1:
//     console.log("Happy Monday!");
//     break;
//   case 2:
// //     console.log("It's Tuesday. You got this!");
// //     break;
// //   case 3:
// //     console.log("Hump day already!");
// //     break;
// //   case 4:
// //     console.log("Just one more day 'til the weekend!");
// //     break;
// //   case 5:
// //     console.log("Happy Friday!");
// //     break;
// //   case 6:
// //     console.log("Have a wonderful Saturday!");
// //     break;
// //   case 7:
// //     console.log("It's Sunday, time to relax!");
// //     break;
// //   default:
// //     console.log("Something went horribly wrong…");
// // }

// // // Set the student's grade
// // const grade = 87;

// // switch (true) {
// //   // If score is 90 or greater
// //   case grade >= 90:
// //     console.log("A");
// //     break;
// //   // If score is 80 or greater
// //   case grade >= 80:
// //     console.log("B");
// //     break;
// //   // If score is 70 or greater
// //   case grade >= 70:
// //     console.log("C");
// //     break;
// //   // If score is 60 or greater
// //   case grade >= 60:
// //     console.log("D");
// //     break;
// //   // Anything 59 or below is failing
// //   default:
// //     console.log("F");
// // }

// // function caseInSwitch(val) {
// //   var answer = "";
// //   // Only change code below this line
// //   switch (true) {
// //     case val === 1:
// //       answer = "alpha";
// //       break;
// //     case val === 2:
// //       answer = "beta";
// //       break;
// //     case val === 3:
// //       answer = "gamma";
// //       break;
// //     case val === 4:
// //       answer = "delta";
// //       break;
// //   }
// //   // Only change code above this line
// //   return answer;
// // }

// // // Change this value to test
// // console.log(caseInSwitch(1));

// function switchOfStuff(val) {
//   var answer = "";
//   // Only change code below this line

//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       "bird";
//       break;
//     case "c":
//       "cat";
//       break;
//     case "default":
//       answer = "stuff";
//   }

//   // Only change code above this line
//   return answer;
// }

// // Change this value to test
// console.log(switchOfStuff("b"));

// Setup
function abTest(a, b) {
  // Only change code below this line

  switch (a) {
    case < 0:
      return "undefined";
      break;
  }

  switch (b) {
    case < 0:
      return "undefined";
      break;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(-2, 2));
