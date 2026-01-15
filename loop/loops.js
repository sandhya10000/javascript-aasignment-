// Loops in Javascript: Loops in JavaScript are used to execute a block of code repeatedly until a certain condition is met.
// Three types of loops:
// while loop - conditional based
// for loop - iteration
// do - while - block of code will execute atleast once even though the condition is false
// initilization; loop starts with
// while(condition){ // true
// code to be executed
// increment/decrement}

// print: 1 - 10
// without loop:
// 10 times console.log()
// with loop
// let num = 1;
// while (num <= 10) { // num < 11 - 11 <= 10,
//     document.writeln(num); // 1, 2, 3... 10
//     num++; // 11
//     // num = num + 1
// }
// document.writeln("<br>")
// document.writeln("loop end")

// 10,20,30,40,50,...100
// let num = 10;
// while (num <= 100) {
//     console.log(num);
//     num += 10;
// }

// print 10 - 1
// let num = 10;
// while (num >= 1) {
//     console.log(num)
//     num--;
// }

// For loop: for(initialization;condition;increment/decrement)

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// break : exit loop, find element 5 in array
// continue: skip current iteration,

// for (let i = 0; i <= 10; i++) {
//     if (i == 6) { // 6 == 6
//         break;
//     }
//     console.log(i); // 0 1 2 3 4 5
// }
// console.log("Exit Loop")

// for (let i = 0; i <= 10; i++) {
//     if (i == 5 || i == 9) { // 5 == 5
//         continue;
//     }
//     console.log(i); // 0 1 2 3 4 6 7 8  10
// }
// console.log("Exit Loop")

// While
// Q1. Write a code to print  even numbers 1 - 20
// Q2. Write a code to print sum of even numbers 1 - 10
// let num = 1;
// let sum = 0;
// while (num <= 10) { // 1 - 10
//     if (num % 2 === 0) { // 2 4 6 8 10
//         sum += num;
//     }
//     num++;
// }
// console.log("sum of even numbers is: " + sum)
// Q3. Print the series:
// 105 98 91 ....7
// For
// Q4. Multiplication table of 5.
// 5 x 1 = 5
// 5 x 2 = 10 ..... 5 x 10 = 50
// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num * i)
// }

//  Guess the Number (While Loop)
// Write a JavaScript program to implement a “Guess the Number” game.
// • The program should store a fixed secret number.
// • It should take input from the user using prompt().
// • Using a while loop, the program should keep asking the user to guess the number.
// • If the guess is wrong, display an alert “Wrong guess, try again”.
// • When the user guesses the correct number, display “Correct! You guessed the number”
// and stop the loop.

// let secretNumber = 7;
// let guess = Number(prompt("Guess the Number"));
// while (guess != secretNumber) {
//   alert("Wrong guess Number");
//   guess = Number(prompt("guess the number"));
// }
// alert("Correct guess number");

// do-while: A do-while loop is similar to a while loop, except that it will always execute the block of code at least once, even if the condition is initially false

// let num = 11;
// do {
//     console.log(num); // 11
//     num++;
// }
// while (num <= 10); // 11 <= 10

// Q1. ATM PIN Retry
// keep asking the user to enter PIN using loop until the correct PIN is entered.
// let correctPin = 1234;
// let pin = prompt("Enter ATM pin")
// while (pin != correctPin) {
//     alert("Wrong PIN,try again")
//     pin = prompt("enter ATM pin")
// }
// alert("PIN accepted")

// Q2. Password Strength
// Keep asking the user to enter password until its length is atleast 6. -  length
// password.length < 6

// Q3. Positive number input
// ask the user to enter a number repeatedly until a positive number is entered.
// num <= 0

// Q4. Login attempts
// Allow only 3 login attempts. lock the account after 3 wrong attempts.
// let correctPass = "admin";
// let attempts = 3;
// while (attempts > 0) {
//     let pass = prompt("Enter Password")

//     if (pass == correctPass) {
//         alert("Login successful");
//         break;
//     } else {
//         attempts--;
//         alert("Wrong,Password..attempts left: " + attempts)
//         console.log(attempts)
//     }
// }
// if (attempts == 0) {
//     alert("account locked")
// }

// Q5. Factorial of 5 - 120
// 5 * 4 * 3 * 2 * 1

// Q6. Fibonacci series upto 10th term
// 0 1 1 2 3 5 8 ...
/** 
let n = 10;
let a = 0;
let b = 1;
for (let i = 1; i <= n; i++) {
  console.log(a); // 0
  let c = a + b; // 1
  a = b;
  b = c;
}

*/
