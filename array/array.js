/**
let arr = [1, 2, 3, 4, 5];
let res = [];
for (let i = 0; i < arr.length; i++) {
  res.push(arr[i] * 2);
}
console.log(res);

 
let arr = [1, 2, 3, 4, 5];
let lastElem = arr[arr.length - 1];
console.log(lastElem);

create an array and display all element
let arr = [4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  console.log("element:", arr[i]);

  Q.2) Find the sum of all element in an array?
let arr = [2, 4, 6, 7, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
}

Q.3) Find average of all element
let arr = [2, 4, 6, 7, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

let average = sum / arr.length;
console.log(average);

Q. 4) Find the larget number in an array
let arr = [2, 4, 6, 7, 8];
let largestN = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestN) {
    largestN = arr[i];
  }
}
console.log(largestN);
Q. 5) Find the smallest Number in an array

let arr = [2, 4, 6, 7, 8];
let smallest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest);
Q.6) count how many elemnt inan array

let arr = [2, 4, 6, 7, 8];

console.log(arr.length);
Q.7) Print array in reverse without using reverse method

let arr = [1, 2, 3, 4, 5, 6];
let reverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}
console.log(reverse);

// let arr = [1, 2, 3, 4, 5, 6];
let string = "sandhya";
let reverse = string.split("").reverse().join();
console.log(reverse);

//Find a number is already  exist in an array
let arr = [1, 2, 3, 4, 5, 6];
let number = 5;
let found;

for (let i = 0; i < arr.length; i++) {
  if (number == arr[i]) {
    found = true;
    break;
  }
}
console.log(found);

  """"""""or""""""""
let arr = [1, 2, 3, 4, 5, 6];
let number = 4;

if (arr.includes(number)) {
  console.log("Number exist");
} else {
  console.log("Number does not exist");
}
  """"""""or""""""""
let arr = [1, 2, 3, 4, 5, 6];
let number = 4;

if (arr.indexOf(number) !== -1) {
  console.log("Number exits");
} else {
  console.log("Number does not exist");
}
    """"""""or""""""""


let arr = [1, 2, 3, 4, 5, 6];
let number = 4;
let result = arr.find((num) => num === number);
console.log(result ? "Number exists" : "Number does not exist");

*/
