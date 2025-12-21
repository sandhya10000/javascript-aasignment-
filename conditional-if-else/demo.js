/**
 * Check several possible value for an expression
 * syntax:-
 *
 

var ch = "i";
switch (ch) {
  case "a":
    console.log("a is vowel");
    break;
  case "e":
    console.log("e is vowel");
    break;
  case "i":
    console.log("i is vowel");
    break;
  case "o":
    console.log("o is vowel");
    break;
  case "u":
    console.log("u is vowel");
    break;

  default:
    console.log("not a vowel");
}
    
var no = 50;
switch (no % 2) {
  case 0:
    console.log("even no");
    break;
  case 1:
    console.log("odd no");
    break;
  default:
    console.log("nan");
}
   

loop
1 -while loop
2 -do while loop
3 - foreach loop
for in loop
for of loop


var i = 1;
while (i <= 5) {
  console.log("hello", i);
  i++;
}
  
var i = 1;
while (i <= 50) {
  console.log("hello", i);
  i += 7;
}
  

var j = 100;
while (j >= 1) {
  console.log(j);
  j -= 10; //assignment operator
}
   */

var i = 1;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log("even no");
  } else {
    console.log("odd no");
  }
  i++;
}
