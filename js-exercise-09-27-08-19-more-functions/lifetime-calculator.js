function calculateSupply(maxAge, currentAge, amountDay) {
  totalYears = maxAge - currentAge;
  totalAmount = amountDay * totalYears;
}

console.log(calculateSupply(75, 23, 3));
