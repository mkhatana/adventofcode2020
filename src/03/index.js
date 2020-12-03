const calculateTrees = (input) => {
  var tree = '#'
  var lines = input.split('\n')
  var counter = 0
  var end = lines[0].length

  var down = 1
  var across = 3

  do {
    var point = lines[down][across]
    if (point === tree) {
      counter++
    }
    down++
    if (across + 3 > end) {
      across = (across + 3) - end
    } else {
      across += 3
    }
  } while (down < lines.length)
  return counter
}

module.exports = { calculateTrees }