/**
 * 
 * i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
 continue statement 

for (let i = 1; i <= 10; i++) {
  if (i == 5 || i == 7) {
    continue;
  }
  console.log(i);
}

for(var i=1; i<=4; i++){
document.write("<b> outer loop </b>")
for(var j=1; j<=5; j++){

document.write("<b> Inner loop- "+j+" </b>")

}}
 */

let arr = [2, 3, 4, 6, 7, 8, 5, 6, 7, 8, 9, 5, 6, 7, 8, 6, 4, 3, 4, 5];
for (i = 1; i < arr.length; i++) {
  console.log("i, hi", i);
  for (j = 1; j < arr.length; j++) {
    console.log("j, Hello", j);
    // for (k = 1; k < arr.length; k++) {
    //   console.log("k,  hello good morning", k);
    // }
  }
}
