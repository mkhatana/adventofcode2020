const fs = require("fs");

function findValidPassport(input) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'] //optional cid

  const passports = input.split(/\n\n/)

passports.map(element => {
  const keyValues = element.replace("\n", " ").split(" ")
  console.debug(keyValues)
});

  return 0
}



describe("day 4 part 1", () => {
  test("2 valid passports", () => {
    var testInput = fs
      .readFileSync(__dirname + "/input.test.txt", "utf8")
      .trim()

    expect(findValidPassport(testInput)).toBe(2);
  })
})