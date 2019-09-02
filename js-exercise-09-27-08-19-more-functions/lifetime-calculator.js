function calculateSupply(maxAge, currentAge, amountDay) {
  totalYears = maxAge - currentAge;
  totalAmount = amountDay * totalYears * 365;

  return `You are currently ${currentAge} years old. So you need an amount of ${totalAmount} packs of your favourite snack if you live to ${maxAge} and eat ${amountDay} packs a day in order to have a lifetime supply.`;
}

console.log(calculateSupply(75, 23, 3));
