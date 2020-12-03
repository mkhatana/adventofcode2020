import { calculateTrees, minimizeSlopes } from ".";
import puzzleInput from "./input";

const testinput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
describe("day 3 part 1", () => {
  test("trees is 0", () => {
    const simpleInput = `..##.......
#...#...#..`;
    expect(calculateTrees(simpleInput, 3, 1)).toBe(0);
  });

  test("trees is 1", () => {
    const simpleInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#`;
    expect(calculateTrees(simpleInput, 3, 1)).toBe(1);
  });

  test("trees is 2", () => {
    const simpleInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.`;
    expect(calculateTrees(simpleInput, 3, 1)).toBe(2);
  });

  test("trees is 7", () => {
    expect(calculateTrees(testinput, 3, 1)).toBe(7);
  });

  test("find solution for encountered trees", () => {
    expect(calculateTrees(puzzleInput, 3, 1)).toBe(254);
  });
});

describe("day 3 part 2", () => {
  test("slopes multiplied is 336", () => {
    expect(minimizeSlopes(testinput)).toBe(336);
  });

  test("find solution for multiplied slopes", () => {
    expect(minimizeSlopes(puzzleInput)).toBe(1666768320);
  });
});
