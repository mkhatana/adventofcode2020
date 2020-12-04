const fs = require("fs");

const array = fs
  .readFileSync(__dirname + "/day1.txt", "utf8")
  .trim()
  .split("\n")
  .map((x) => +x)
  .sort((a, b) => a - b);

const chunks = Math.ceil(array.length / 3);

const chunkA = array.slice(0, Math.ceil(array.length / 3));
const chunkB = array.slice(chunks, 2 * chunks);
const chunkC = array.slice(2 * chunks, array.length);

function getNumbersThatAddTo2020(array) {
  for (i in chunkA) {
    for (j in chunkB) {
      for (k in chunkC) {
        const val = array[i] + array[j] + array[k];
        console.log(val);
        if (val === 2020) {
          console.log(
            `the three numbers are: ${array[i]} and ${array[j]} and ${array[k]}`
          );
          return { a: array[i], b: array[j], c: array[k] };
        }
      }
    }
  }
}
const numbers = getNumbersThatAddTo2020(array);

const day1part2Answer = numbers.a * numbers.b * numbers.c;

console.log(`day 1 part 2 answer = ${day1part2Answer}`);
