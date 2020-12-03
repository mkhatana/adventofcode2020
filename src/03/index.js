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

    console.log({ x: across, y: down, point: point });
  }
  return counter;
};

module.exports = { calculateTrees };
