function b() {
  console.log(myVar);
  var myVar = 3;
  console.log(myVar);
}

function a() {
  console.log(myVar);
  var myVar = 2;
  console.log(myVar);
  b();
}

function c() {
  console.log(myVar);
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
c();
