// 1

const name = "Natalia";
console.log(`Name length is ${name.length}`);
const secondElem = name[1];
const sixthElem = name[5];
console.log(`2nd element: ${secondElem}, 6th element: ${sixthElem}`);

//

const js = "JavaScript";
console.log(`The length of the string is: ${js.length} characters`);
const letterJ = js[0];
const letterS = js[4];
console.log(`${letterJ} & ${letterS}`);

// 3

const sentence = "I can walk in the park all day!";
const goal = sentence.includes("park");
const park = goal ? "park" : "keep trying";
console.log(`${park}`);

//4

const jsWord = "JavaScript";
console.log(`${jsWord.substring(3, 6)}`);

// 5

const helloWorld = "Hello World";
console.log(helloWorld.toUpperCase());

// 6

const anotherWorld = "Hello Earthling";
console.log(`${anotherWorld.toLowerCase()}`);

// 7

const shoes = "nice shoes";
console.log(`Does the string include an "l"? ${shoes.includes("l")}
Does the string include an "n"? ${shoes.includes("n")}`);

// 8

const firstString = "JavaScript";
console.log(`${firstString[0]}${firstString}${firstString[0]}`);

// 9

console.log(
  `${firstString.substring(7)}${firstString}${firstString.substring(7)}`
);

//10

const computer = "ThinkPad"; // I declare a variable
console.log(`${computer.toUpperCase()}`); // I transform the value of my variable into uppercase with the method ".toUpperCase()" and print it
console.log(
  `Does our string include the word Java? ${computer.includes("Java")}`
);

//11

const myString = "JavaScript"; // I declare a variable and give it the value "JavaScript"
console.log(
  `${myString[myString.length - 1]}${myString.substring(
    1,
    myString.length - 1
  )}${myString[0]}`
); // Bit by bit. First of all we will explain ${myString[myString.length - 1]}. "myString.length" returns the total number of characters of the variable (which are 10). That means "[myString.length - 1]" is the same than "10 - 1" (which is "9"). Once we get that, we can continue: ${myString[myString.length - 1]} is the same as writing ${myString[9]} and this means just extracting the 8th character of the string: "t" (don't forget we start counting from nill). Same example here: ${myString.substring(1, myString.length - 1)}. "myString.length - 1" is equals to "10-1" (which is "9"). So it's the same as writing ${myString.substring(1, 9)} and this means we want to extract from the 2nd until the 8th character of the string because the 9th won't be included. This means it returns "avaScrip". ${myString[0]} just gets the very first character of the string, which is "J". So in the end, the console returns "tavaScripJ"

// 12. Concatenation

// Create 3 different variables about yourself using strings as values e.g.let firstName = "Maria".Print the sentence to the console using string interpolation. Example of output: `My name is Maria. I live in Berlin and I am a teacher`.

const myName = "Johannes"; // I declare the first variable
const myCity = "Berlin"; // I declare the second variable
const myJob = "web developer"; // I declare the third variable
console.log(`My name is ${myName}. I live in ${myCity} and I am a ${myJob}.`); // I print a string with the values of my variables in placeholders within a string literal

//13

// Declare a variable and assign the value the quick brown fox (lower case). Capitalize the first letter of that string.

const pangram = "the quick brown fox"; // I declare a variable
console.log(`${pangram[0].toUpperCase()}${pangram.substr(1)}`); // Bit by bit. First of all we will analyze ${pangram[0].toUpperCase()}. "pangram[0]" extracts the index 0 of our string, which means the first character of it: "t" (since we start counting from nill). Then we add ".toUpperCase()" in order to convert the "t" into "T". After that we go for ${pangram.substr(1)} which will return all the characters between the 2nd character of the string and the end of it (since we didn't write a second number telling the console where to stop). This returns "he quick brown fox". And both values together will return "The quick brown fox"
console.log(pangram[0].toUpperCase() + pangram.substr(1)); // This is another way to do the same thing. We can just concatenate both values in order not to create a string literal between backticks `.....`
