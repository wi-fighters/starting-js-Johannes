var add = (function() {
  var counter = 0;
  return function() {
    counter += 1;
    console.log();
    return counter;
  };
})();
console.log(add);
console.log(add());
console.log(add());
console.log(add());
