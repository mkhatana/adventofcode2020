import {findValidPassport} from "./index";

const fs = require("fs");


describe("day 4 part 1", () => {
  test("2 valid passports", () => {
    var input = fs
      .readFileSync(__dirname + "/input.test.txt", "utf8")
      .trim()

    expect(findValidPassport(input)).toBe(2);
  })

  test("find solution for part 1", () => {
    var input = fs
      .readFileSync(__dirname + "/puzzle.input.txt", "utf8")
      .trim()

    expect(findValidPassport(input)).toBe(213);
  })
})