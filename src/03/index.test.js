import { calculateTrees } from "."
import puzzleInput from "./input"

test('Encountered trees is 0', () => {
  const simpleInput = `..##.......
#...#...#..`
  expect(calculateTrees(simpleInput)).toBe(0)
})

test('Encountered trees is 1', () => {
  const simpleInput =
    `..##.......
#...#...#..
.#....#..#.
..#.#...#.#`
  expect(calculateTrees(simpleInput)).toBe(1)
})

test('Encountered trees is 2', () => {
  const simpleInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.`
  expect(calculateTrees(simpleInput)).toBe(2)
})

test('Encountered trees is 7', () => {
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
.#..#...#.#`
  expect(calculateTrees(input)).toBe(7)
})

test('find solution for encountered trees', () => {
  expect(calculateTrees(puzzleInput)).toBe(244)
})