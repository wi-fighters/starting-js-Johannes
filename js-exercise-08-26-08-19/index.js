// //1. Declare a variable called name. Assign a string value. Print to screen.

// let name = "Johannes";

// console.log(name);

// //2. Print to screen that name with a "Schm" in front of it.

// console.log(`Schm${name}`);

// //3. What value does name have now ? Comment your answer and then print name to screen to test.

// //Name is unchanged

// //4. Assign another string value to name. Print to screen. Comment why name has now had two different values.
// //Not necessary?

// name = "Simon";

// console.log(name);

// //5. Declare a variable called coffee. Assign it a numeric value.

// let coffee = 5;

// //6. Print to screen a string that tells us x regularly drinks y cups of coffee per day.

// name = "Marlon";

// console.log(`${name} regularly drinks ${coffee} cups of coffee per day. :)`);

// // 7. Declare a variable called daysBeforeExam. Assign it a numeric value.

// let daysBeforeExam = 6;

// //8. Print to screen a string that tells us x drinks y cups of coffee with n days before exam.

// console.log(
//   `${name} regularly drinks ${coffee} cups of coffee per day ${daysBeforeExam} days before exam.`
// );

// //9. Making use of `+=` and `-=`, print to screen a string that has x drinking one more cup of coffee, with (n - 1) less days before exam.

//take this as input
// const days = 5;
// const name = "Nicolas";

// //return as output
// const cups = 1;

function getCoffeeInfo(daysUntilExam, name) {
  if (daysUntilExam > 5) {
    return `What's on Neflix? What exam?`;
  } else if (daysUntilExam < 0) {
    return `Detox time, exam is over.`;
  } else {
    cups = 6 - daysUntilExam;
    return `With ${daysUntilExam} days until the exam, ${name} drinks ${cups} cups of coffee per day.`;
  }
}

console.log(getCoffeeInfo(0, "Nicolas"));

//random concat practice
// let phrase1 = "firstPart";
// let phrase2 = "secondPart";
// let phrase3 = phrase1.concat(phrase2);
// console.log(phrase3);

// let array1 = ["sausage", "anotherSausage"];
// let array2 = ["water", "evenMoreWater"];
// let array3 = array1.concat(array2);
// console.log(array3);
