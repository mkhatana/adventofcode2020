import { calculateTrees } from ".";
import puzzleInput from "./input";
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
    const input = `..##.......
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
    expect(calculateTrees(input, 3, 1)).toBe(7);
  });

  test("find solution for encountered trees", () => {
    expect(calculateTrees(puzzleInput, 3, 1)).toBe(254);
  });
});
