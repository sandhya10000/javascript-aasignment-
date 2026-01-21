// Function in Javascript: In JavaScript, functions are blocks of code that can be defined and executed to perform a specific task or set of tasks. They are a fundamental part of the language and allow you to write reusable and modular code.
// Types of functions:
// i. In built/predefined function: prompt(),alert(),confirm()
// ii. user define function:

// i. Function declaration: function functionName(){...block of code to be executed/perform a specific task } functionName(); (function calling/invoking)
// ii. Anonymous function: function without name
// iii. Function Expression: we can declare a function, and store it into a variable
// iv. Immediately invoked function: One time execution,
// v. Closure: outer,inner function
// vi. Callback function: function inside arguement
// vii. Arrow function: ES6

// i. Function Declaration:
// function greet() {
//     console.log("Hello,User")
// }
// greet()

// parameter,arguments
// sum of 2 numbers
// function sum(num1, num2) { // parameters
//     console.log(num1 + num2)
// }
// sum(10, 30); // arguments - 40
// sum(10, 20, 50); // 30
// sum(10); // NaN(Not a Number)

// function greet(user) {
//     console.log("Hello, " + user)
// }
// greet()

// default parameter:
// function sum(num1 = 10, num2 = 20) {
//     console.log(num1 + num2)
// }
// sum(); // 30
// sum(20); // 20 + 20
// sum(10, 40); // 50

// function greet(user = "User") {
//     console.log("Hello, " + user)
// }
// greet(); // when you are not passing any argument, it'll take default value of a parameter..default parameter
// greet("John"); // but when you pass value, then it'll take arguement's value

// let greet = function () {
//     console.log("Hello,User")
// }
// greet()

// * Hoisting in Javascript: Before ES6 concepts, var...to pull function and variable declaration

// greet()
// function greet() {
//     console.log("Hello,world...")
// }

// greet(); // typerror: greet is not a function
// var greet = function () {
//     console.log("Hello,User")
// }

// greet(); // Cannot access 'greet' before initialization
// let greet = function () {
//     console.log("Hello,User")
// }

// var num;

// console.log(num); //
// var num; // declration
// num = 10; // expression

// console.log(num) // undefined
// var num = 20;

// Immediately invoked function:

// (function () {
//     console.log("Hi,Javascript")
// })()

// multiplication of table using function ->
// table of 5
// table of 8
// table of 16

// Count positive numbers
// function counts how many positive numbers are present in an array.

// Prime number checker..

/**
 * multiplication of table 
 * function table(num = 5) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}
table();
table(8);
table(16);

//To count how many  positive and negative element  in array
let arr = [1, 2, 3, 4, 5, 6, -9];
function countPositNum() {
  let positive = [];
  let negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  return {
    positiveCount: positive.length,
    negativeCount: negative.length,
    positive,
    negative,
  };
}
console.log(countPositNum(arr));
//To Find Prime number from an array
//Need to be check pending...
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {}
}


//Closure function:-
Create 


// function outCounter() {
//   let value = 0;
//   return {
//     increament() {
//       value++;
//       console.log(console);
//     },

//     decreament() {
//       value--;
//       console.log(value);
//     },
//   };
// }
// let counter = outCounter();
// counter.increament();
// counter.decreament();
// console.log(counter);

function Counter() {
  let count = 0;
  return function (action) {
    if (action == "inc") {
      count++;
    } else if (action == "dec") {
      count--;
    }
    return count;
  };
}
let result = Counter();
console.log(result("inc"));
console.log(result("inc"));
console.log(result("dec"));

function bankAccount() {
  let balance = 1000;

  return function (type, amount) {
    if (type === "deposit") {
      balance += amount;
      console.log("Balance after deposit:", balance);
    } else if (type === "withdraw") {
      if (amount <= balance) {
        balance -= amount;
        console.log("Balance after withdrawal:", balance);
      } else {
        console.log("Insufficient balance");
      }
    }
    return balance;
  };
}

let account = bankAccount();

console.log(account("deposit", 500)); // 1500
console.log(account("withdraw", 300)); // 1200

//1. Write a function to count positive and negative numbers in an array.
21 january 2026

let arr = [2, 3, 23, -9, -8, -6, 6];
function CountPsNegNum() {
  let positive = [];
  let negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  return {
    positive,
    negative,
    positiveCount: positive.length,
    nagetiveCount: negative.length,
  };
}

console.log(CountPsNegNum(arr));
//2. Write a function to search an element in an array and print found/not found.

let arr1 = [8, 1, 2, 3, 4, 9];
function searchElem(arr) {
  let num = 9;
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      console.log("number found");
      return true;
    }
  }
  console.log("number is not found");
  return false;
}
console.log(searchElem(arr1));

//3. Student marks stored in an array.
//Write a function to calculate total, average, and result.
let arr = [80, 100, 20, 30, 40, 99];
function studMarks(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let avg = total / arr.length;
  console.log(avg, "average");
  let result = avg >= 40 ? "pass" : "fail";

  return {
    total,
    avg,
    result,
  };
}
console.log(studMarks(arr));

 */
//

//4. Write a function to find the largest number in an array.
/**let array = [9, 10, 8, 60, 33, 4];

function largestNum(arr) {
  let largt = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largt) {
      largt = arr[i];
    }
  }
  return largt;
}

console.log(largestNum(array));

5. 1. An array stores minutes late for students: [0,5,12,0,3].Write a function
to count how many students were late.
 *let arr = [0, 5, 12, 0, 3];
function lateStudent(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
}

let result = lateStudent(arr);
console.log(result);

6) 2. Array stores login success(1) and failure(0). Function counts failed logins
  let arr = [1, 0, 0, 0, 1, 1, 1];

function CountFailSuccLogin(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
      console.log(count, "count-----------");
    }
  }
  return count;
}
let result = CountFailSuccLogin(arr);
console.log(result);


7)3. Employee Overtime Hours.
Array stores overtime hours.
Function counts employees with more than 5 hours overtime.
let overtime = [5, 10, 15, 20, 30, 35];

function emplyOvertimeHrs(overtime) {
  let count = 0;
  for (let i = 0; i < overtime.length; i++) {
    if (overtime[i] > 5) {
      count++;
    }
  }
  return count;
}
let result = emplyOvertimeHrs(overtime);
console.log(result);
 */
