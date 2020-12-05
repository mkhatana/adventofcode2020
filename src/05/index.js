const decodeAllData = (input) => {
  const rowData = input.slice(0, 7);
  const columnData = input.slice(7);

  const row = parseInt(rowData.replace(/F/g, 0).replace(/B/g, 1), 2);
  const column = parseInt(columnData.replace(/L/g, 0).replace(/R/g, 1), 2);
  return { row, column, seat: (row * 8) + column }
}


const getAllSeats = (input) =>
  input.map(e => decodeAllData(e).seat).sort((a, b) => b - a);

const maxSeatId = (input) => getAllSeats(input)[0]


const findMissingSeat = (input) => {
  const seats = getAllSeats(input);

  let possibleSeats = [];
  for (let index = 1; index < seats.length - 1; index++) {
    const element = seats[index];
    const minusOne = seats[index + 1]; //sorted in descending order
    const plusOne = seats[index - 1];

    if (!(element + 1 === plusOne && element - 1 === minusOne)) {
      possibleSeats.push(element);
    }

    if(possibleSeats.length > 2) {
      break;
    }
  }

  return possibleSeats.reduce((a, b) => (a + b) / 2);

}


module.exports = {
  findMissingSeat, decodeAllData, maxSeatId
}