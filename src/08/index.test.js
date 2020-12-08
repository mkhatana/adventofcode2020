import puzzle from "./puzzle";

const findVal = input => {
  const instructions = input.split('\n').map(e => {
    const line = e.split(' ');
    const value = parseInt(line[1]);
    return { inst: line[0], value: value, nextInst: line[0] === 'jmp' ? value : 1, count: 0 }
  })

  var seenTwice = false;

  let index = 0;

  let val = 0;

  while (seenTwice === false) {
    const { inst, value, nextInst, count } = instructions[index];

    // console.debug(`count = ${count}`);
    if (count === 1) {
      seenTwice = true;
      break;
    }
    if (inst === 'acc') {
      val += value;
    }
    instructions[index] = { inst, value, nextInst, count: count + 1 }

    // console.debug(`we hit = ${JSON.stringify(instructions[index])}`)
    // console.debug(`index is ${index}\tvalue is ${val}`);

    index += nextInst;
  }

  return val;
}

test("value before infinite loop is 5", () => {
  const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`


  expect(findVal(input)).toBe(5);
})

test("find puzzle val", () => {
  expect(findVal(puzzle)).toBe(1317);

})