/**If Statement
 *
 

if (true) {
  console.log("called");
}

var a = 50;
if (a) {
  console.log("hello users");
}
  

var no = 51;
if (no % 2 == 0) {
  console.log("even no");
}
 

var a = 10;
var b = 20;
var c = 50;
if (a > b && a > c) {
  console.log(a);
}
if (b > c && b > a) {
  console.log(b);
}

if (c > a && c > b) {
  console.log(c);
}

 */
/**
 * If else Statement
 * if... else statement is used when a different sequence of instructions is to be executed depending on the logical value(True/False)
 * of the condition evaluated.
 * syntax:-
 * if(consdition)
 * {
 * Statement_1block
 * }
 * else{
 * statement 2 block
 * }
 * statement 3;
 */

/**
if (false) {
  console.log("hello");
} else {
  console.log("users");
}

var n = 10;
if (n % 2 == 0) {
  console.log("even no");
} else {
  console.log("odd no");
}
  

var email = "admin@gmail.com";
var pass = "ad@1234";
if (email == "admin@gmail.com") {
  if (pass == "ad@1234") {
    console.log("user login");
  } else {
    console.log("pass not found");
  }
} else {
  console.log("email not found");
}

 */
/**
var a = 10;
var b = 20;
var c = 5;
if (a > b) {
  if (a > c) {
    console.log(a);
  } else {
    console.log(c);
  }
} else {
  if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}


 * To show a multi-way decision based on several
 * conditions, we use else if statement.
 * Syntax:-
 * if(condition_1){
 * statement_1_ Block;
 * }
 * else if(condition_2){
 * statement_2_ block;
 * }
 * else if(condition_3){
 * statement_3_ block;
 * }
 * else{
 * statement x}
 */

var marks = 31;
if (marks >= 75) {
  console.log("honours");
} else if (marks >= 60) {
  console.log("first");
} else if (marks >= 50) {
  console.log("second");
} else if (marks >= 30) {
  console.log("third");
} else {
  console.log("fail");
}
