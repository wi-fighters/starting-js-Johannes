function calculateDogAge(humanAge, conversionRate) {
  puppyAge = humanAge * conversionRate;
  return puppyAge;
}
console.log(`Your dog is ${calculateDogAge(3, 7)} years old in dog years`);
