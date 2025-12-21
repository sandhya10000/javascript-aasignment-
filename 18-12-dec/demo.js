/**
 * Difference between let var and const
 * for (var i = 1; i < 5; i++) {
  console.log(i);
}
console.log(i);

for (let i = 1; i < 5; i++) {
  console.log(i);
}
 
for (const i = 1; i < 5; i++) {
  console.log(i);
}
  
if (true) {
  var a = 50;
  console.log(a);
}
console.log(a);

if (true) {
  let a = 50;
  console.log(a);
}
console.log(a);
 
if (true) {
  const a = 50;
  console.log(a);
}
console.log(a);

Array 
let arr1 = [];
let arr2 = new Array()

let arr = [];
arr[0] = 10;
arr[1] = 50;
arr[2] = 90;
arr[3] = 80;

console.log(arr);


let arr = [10, 20, 30, 40, 50];
// console.log(arr[0], arr[2]);

// for (let i = 0; i <= 5; i++) {
//   console.log(arr[i]);
// // }

// for (let i = 0; i <= 5; i++) {
//   console.log(arr[i]);
// }
// console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr = [10, 20, 30, 40, 50];
delete arr[3];

arr[3] = "sumit";
console.log(arr);
 


for (let val of arr) {
  console.log(val);
}



let arr = [10, 20, 30, 40, 50];
for(let i=0;i<arr.length; i++){
    for
}
    

let arr1 = [10, 20, 30];
let arr2 = ["amit", "hari", "rahul"];
let data = [50, 60];
//let arr3 = arr1.concat(arr2);
let arr3 = arr1.concat(arr2, data);
console.log(arr3);

 

let arr = ["amit", "hari", "rahul"];
//console.log(arr.join());
// console.log(arr.join(" "));
console.log(arr.join("- "));



let arr = ["amit", "hari", "rahul"];
console.log(arr.toString());

// reverse Array
// odd an even find Array

//To find ascending and descending array
let arr = [99, 34, 65, 8, 10, 3, 1];

for (let i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let tmp = arr[j];
      arr[j] = arr[i];
      arr[i] = tmp;
    }
  }
}
console.log(arr, "ascending value!");
//To find descending value
let arr = [99, 34, 65, 8, 10, 3, 1];

for (let i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let tmp = arr[j];
      arr[j] = arr[i];
      arr[i] = tmp;
    }
  }
}
console.log(arr, "descending value!");

Sure 👍
Let’s go **iteration by iteration (dry run)** so you can clearly see **how the loops work and how values change**.

---

## **Code Again**

```js
let arr = [10, 8, 77, 16, 45, 3, 90, 19];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let tmp = arr[j];
      arr[j] = arr[i];
      arr[i] = tmp;
    }
  }
}

console.log(arr);
```

---

# **Initial Array**

```
Index: 0   1   2   3   4   5   6   7
Value: 10  8  77  16  45  3  90  19
```

---

# 🔁 **Iteration Details**

---

## 🟢 **Outer Loop: i = 0**

`arr[i] = 10`

### Inner Loop Comparisons

| i | j | Compare | Swap? | Array After                    |
| - | - | ------- | ----- | ------------------------------ |
| 0 | 1 | 10 > 8  | Yes   | [8, 10, 77, 16, 45, 3, 90, 19] |
| 0 | 2 | 8 > 77  | No    | same                           |
| 0 | 3 | 8 > 16  | No    | same                           |
| 0 | 4 | 8 > 45  | No    | same                           |
| 0 | 5 | 8 > 3   | Yes   | [3, 10, 77, 16, 45, 8, 90, 19] |
| 0 | 6 | 3 > 90  | No    | same                           |
| 0 | 7 | 3 > 19  | No    | same                           |

✅ **After i = 0**, smallest value (`3`) is placed at index `0`.

---

## 🟢 **Outer Loop: i = 1**

`arr[i] = 10`

### Inner Loop Comparisons

| i | j | Compare | Swap? | Array After                    |
| - | - | ------- | ----- | ------------------------------ |
| 1 | 2 | 10 > 77 | No    | same                           |
| 1 | 3 | 10 > 16 | No    | same                           |
| 1 | 4 | 10 > 45 | No    | same                           |
| 1 | 5 | 10 > 8  | Yes   | [3, 8, 77, 16, 45, 10, 90, 19] |
| 1 | 6 | 8 > 90  | No    | same                           |
| 1 | 7 | 8 > 19  | No    | same                           |

✅ **After i = 1**, second smallest value (`8`) is fixed.

---

## 🟢 **Outer Loop: i = 2**

`arr[i] = 77`

| i | j | Compare | Swap? | Array After                    |
| - | - | ------- | ----- | ------------------------------ |
| 2 | 3 | 77 > 16 | Yes   | [3, 8, 16, 77, 45, 10, 90, 19] |
| 2 | 4 | 16 > 45 | No    | same                           |
| 2 | 5 | 16 > 10 | Yes   | [3, 8, 10, 77, 45, 16, 90, 19] |
| 2 | 6 | 10 > 90 | No    | same                           |
| 2 | 7 | 10 > 19 | No    | same                           |

✅ **After i = 2**, third smallest value (`10`) is fixed.

---

## 🟢 **Outer Loop: i = 3**

`arr[i] = 77`

| i | j | Compare | Swap? | Array After                    |
| - | - | ------- | ----- | ------------------------------ |
| 3 | 4 | 77 > 45 | Yes   | [3, 8, 10, 45, 77, 16, 90, 19] |
| 3 | 5 | 45 > 16 | Yes   | [3, 8, 10, 16, 77, 45, 90, 19] |
| 3 | 6 | 16 > 90 | No    | same                           |
| 3 | 7 | 16 > 19 | No    | same                           |

---

## 🟢 **Outer Loop: i = 4**

`arr[i] = 77`

| i | j | Compare | Swap? | Array After                    |
| - | - | ------- | ----- | ------------------------------ |
| 4 | 5 | 77 > 45 | Yes   | [3, 8, 10, 16, 45, 77, 90, 19] |
| 4 | 6 | 45 > 90 | No    | same                           |
| 4 | 7 | 45 > 19 | Yes   | [3, 8, 10, 16, 19, 77, 90, 45] |

---

## 🟢 **Outer Loop: i = 5**

`arr[i] = 77`

| i | j | Compare | Swap? | Array After                    |
| - | - | ------- | ----- | ------------------------------ |
| 5 | 6 | 77 > 90 | No    | same                           |
| 5 | 7 | 77 > 45 | Yes   | [3, 8, 10, 16, 19, 45, 90, 77] |

---

## 🟢 **Outer Loop: i = 6**

`arr[i] = 90`

| i | j | Compare | Swap? | Array After                    |
| - | - | ------- | ----- | ------------------------------ |
| 6 | 7 | 90 > 77 | Yes   | [3, 8, 10, 16, 19, 45, 77, 90] |

---

## 🟢 **Outer Loop: i = 7**

No inner loop runs (already sorted).

---

# ✅ **Final Sorted Array**

```js
[3, 8, 10, 16, 19, 45, 77, 90]
```

---
To find duplicate string 
let str = "programming";

let freq = {};
let duplicates = [];

for(let char of str){
    freq[char] = (freq[char] || 0) + 1;

}
console.log(freq,"key-------");

for(let key in freq){
    if(freq[key]>1){
      duplicates.push(key);
   console.log(key,'key-----------')  
    }
   
}
console.log(duplicates,'duplicates-----------')

3. Convert a nested array into a single-line array using JavaScript for loops.

const arr = [1, [2, 3], [4, [5, 6]], 7];

function flattenArray(arr){
    let result = [];
    for(let i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            let flat = flattenArray(arr[i]);
            
           for(let j=0; j<flat.length; j++){
               result.push(flat[j]);
           }
        }
       else{
            result.push(arr[i]);
       }
    }
   return result;
  

}
console.log(arr, 'flatten array')
console.log( flattenArray(arr), 'flatten array')

4.Reverse an array

let arr =[1,2,3,4,5,6,7];
let reversedArr =[];
for(let i =arr.length-1; i>=0; i--){
    reversedArr.push(arr[i]);
}
console.log(reversedArr)

5. //To find max and min value from an array

let arr = [44,6,3,9,1,11];
let max = arr[0];
let min = arr[0];
for(let i =0; i<arr.length;i++){
   if(max>arr[i])
   max =arr[i];
   if(min<arr[i])
   min = arr[i];
}
console.log(max);
console.log(min);


6. 
*/
