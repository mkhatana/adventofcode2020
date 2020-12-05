import { decodeAllData, maxSeatId, findMissingSeat } from "./index";
import puzzle from "./puzzle";


describe("part 1", () => {
  test("should return row 44, column 5, seat id 357", () => {
    const input = `FBFBBFFRLR`;

    const decoded = decodeAllData(input);

    expect(decoded.row).toBe(44);
    expect(decoded.column).toBe(5);
    expect(decoded.seat).toBe(357);
  });
  test("should return row 70, column 7, seat id 567", () => {
    const input = `BFFFBBFRRR`;
    const decoded = decodeAllData(input);

    expect(decoded.row).toBe(70);
    expect(decoded.column).toBe(7);
    expect(decoded.seat).toBe(567);
  });
  test("should return row 14, column 7, seat id 119", () => {
    const input = `FFFBBBFRRR`;
    const decoded = decodeAllData(input);

    expect(decoded.row).toBe(14);
    expect(decoded.column).toBe(7);
    expect(decoded.seat).toBe(119);
  });
  test("should return row 102, column 4, seat id 820", () => {
    const input = `BBFFBBFRLL`;
    const decoded = decodeAllData(input);

    expect(decoded.row).toBe(102);
    expect(decoded.column).toBe(4);
    expect(decoded.seat).toBe(820);
  });
  test("find part 1 solution", () => {
    const input = puzzle.split('\n');

    expect(maxSeatId(input)).toBe(915);
  });
});

describe("part 2", () => {
  test("find part 2 solution", () => {
    const input = puzzle.split('\n');
    expect(findMissingSeat(input)).toBe(699);
  })
})