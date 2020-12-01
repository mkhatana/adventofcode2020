var args = process.argv.slice(2);

console.debug(args);

switch (args[0]) {
  case "1.1":
    require('./day1part1');
    break;
  case "1.2":
    require('./day1part2');
    break;
}
