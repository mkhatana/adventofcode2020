const decode = (data, top, bottom, upHalfChar, lowHalfChar) => {
  var max = top;
  var min = bottom;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    const UpperHalf = Math.floor(((max + min) / 2));
    const LowerHalf = Math.ceil(max - ((max - min) / 2));
    max = element === upHalfChar ? UpperHalf : max;
    min = element === lowHalfChar ? LowerHalf : min;
    // console.debug(`char = ${element}, max = ${max}, min = ${min}`)
  }
  // console.debug(`final values = ${max} ${min}`);
  return max;
}

export const decodeData = (input) => {
  const rowData = input.slice(0, 7);
  const columnData = input.slice(7);

  const row = decode(rowData, 127, 0, 'F', 'B');
  const column = decode(columnData, 7, 0, 'L', 'R');
  return { row, column, seat: (row * 8) + column }
}


export const maxSeatId = (input) => Math.max(...(input.map(e => decodeData(e).seat)))
