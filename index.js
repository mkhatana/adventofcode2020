const fs = require("fs");

var array = fs
  .readFileSync("./day1.txt", "utf8")
  .split("\n")
  .sort((a, b) => a - b);

for (i in array) {
  console.log(array[i]);
}
