// This time, the global scope doesn't know details about how to talk.
// All we know is that if we call talk(),
// it will privately figure out how to talk
talk("aussie");

function talk(person) {
  // We can also declare these as 'private variables'
  // So that only the function knows about them.
  // Test yourself: Since they are declared with const,
  // what scope do these variables have?
  const talkPirate = function() {
    return "ahoy";
  };
  const greetAnAustralian = function() {
    return "oi";
  };

  if (person === "pirate") {
    console.log(talkPirate());
  } else if (person === "aussie") {
    console.log(greetAnAustralian());
  } else {
    console.log(`I've never met a ${person} before.`);
  }
}

const talkPirate = function() {
  return "ahoy";
};
const greetAnAustralian = function() {
  return "oi";
};

function talkToJenna(howToTalk) {
  return `${howToTalk()} Jenna!`;
}

console.log(talkToJenna(talkPirate));

// Here's another way to write the same function,
// using the accumulator pattern.
// Breaking down the steps like this will be useful
// as your funcs become more complex

// function talkToJenna(howToTalk) {
//     let greeting = '';

//     greeting = `${howToTalk()} Jenna!`;

//     return greeting;
// }
