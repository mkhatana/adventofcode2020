export const isValidPartOne = (line) => {
  const splitData = line.split(' ');

  const amounts = splitData[0].split('-');
  const minAmount = parseInt(amounts[0]);
  const maxAmount = parseInt(amounts[1]);

  console.info(maxAmount);
  console.info(minAmount);

  const letterToFind = splitData[1].charAt(0);
  const stringToCheck = splitData[2];
  const count = stringToCheck.split(letterToFind).length - 1;

  console.info(count)

  if (count >= minAmount && count <= maxAmount) {
    return true;
  }
}

export function PartOne() {
  var counter = 0;

  for (i in array) {
    if (isValidPartOne(array[i])) {
      counter++;
    }
  };

  console.log(counter);
}