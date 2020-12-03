const calculateTrees = (input, x, y) => {
  var tree = "#";
  var lines = input.split("\n");
  var counter = 0;
  var end = lines[0].length;

  var down = y;
  var across = x;

  while (down < lines.length) {
    var point = lines[down][across];
    if (point === tree) {
      counter++;
    }
    down++;
    across += x;
    if (across >= end) {
      across -= end;
    }

    // console.log({ x: across, y: down, point: point });
  }
  return counter;
};

const minimizeSlopes = (input) => {
  return [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
  ]
    .map((delta) => {
      console.log({ x: delta[0], y: delta[1] });
      return calculateTrees(input, delta[0], delta[1]);
    })
    .reduce((a, b) => a * b);
};
module.exports = { calculateTrees, minimizeSlopes };
