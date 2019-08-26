//1. Declare a variable called name. Assign a string value. Print to screen.

//function nameString(type, value) {
// var name = type + "" + value;
// return name;
//}

//console.log(nameString("Name:", "Johannes"));

//2. Print to screen that name with a "Schm" in front of it.

//function nameString(type, value) {
// var name = type + " " + "Schm" + value;
//return name;
//}

//console.log(nameString("Name", "Johannes"));

//3. What value does name have now ? Comment your answer and then print name to screen to test.
//Not necessary?

//4. Assign another string value to name. Print to screen. Comment why name has now had two different values.
//Not necessary?

//5. Declare a variable called coffee. Assign it a numeric value.

//function brewingCoffee(amount) {
//  const cups = amount + " cups of coffee";
// return cups;
//}

//console.log(brewingCoffee(5));

//6. Print to screen a string that tells us x regularly drinks y cups of coffee per day.

function stayingHydrated(amountRegular, amountCoffee) {
  const regular = amountRegular + " regular drinks";
  const coffee = amountCoffee + " cups of coffee";
  const combination = `You should drink at least ${regular} and ${coffee} per day. :)`;
  return combination;
}

console.log(stayingHydrated(5, 13));
