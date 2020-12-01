const fs = require("fs");

function getNumbersThatAddTo2020(array) {
  for (i in array) {
    for (let j = array.length - 1; j > 0; j--) {
      const val = array[i] + array[j];
      console.log(val);
      if (val === 2020) {
        console.log(`the two numbers are: ${array[i]} and ${array[j]}`);
        return { a: array[i], b: array[j] };
      }
    }
  }
}

function multiplyTogether(a, b) {
  return a * b;
}


var array = fs
  .readFileSync("./day1.txt", "utf8")
  .split("\n")
  .map((x) => +x)
  .sort((a, b) => a - b);


const numbers =  getNumbersThatAddTo2020(array);

const day1Answer = multiplyTogether(numbers.a, numbers.b);

console.log(`day 1 answer = ${day1Answer}`);
