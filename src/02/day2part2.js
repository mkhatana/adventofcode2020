const fs = require("fs");

var array = fs
  .readFileSync(__dirname + "/day2input.txt", "utf8")
  .trim()
  .split("\n");


const isValidPartOne = (line) => {
  const splitData = line.split(' ');

  const indexes = splitData[0].split('-');
  const index1 = parseInt(indexes[0]);
  const index2 = parseInt(indexes[1]);

  console.info(`index 1 at: ${index1}`);
  console.info(`index 2 at: ${index2}`);

  const letterToFind = splitData[1].charAt(0);
  const stringToCheck = splitData[2];
  console.log(`letter to find = ${letterToFind}`);

  console.log(`string to check = ${stringToCheck}`);
  const a = stringToCheck.charAt(index1 - 1);
  const b = stringToCheck.charAt(index2 - 1);
  console.log(`char at index1 = ${a}`);
  console.log(`char at index2 = ${b}`);


  if ((a != letterToFind &&
    b == letterToFind) || (a == letterToFind &&
      b != letterToFind)) {
    console.log('rule a = ' + true);

    return true;
  }


  if ((a != letterToFind &&
    b != letterToFind) || (a == letterToFind &&
      b == letterToFind)) {

    console.log('rule d = ' + false);
    return false;
  }

}

var counter = 0;
// isValidPartOne(array[0])
for (i in array) {
  console.log("---------------");
  console.log(array[i]);
  if (isValidPartOne(array[i])) {
    counter++;
  }
};

console.log(counter);
