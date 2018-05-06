import { twoSum } from "./../src/1.two-sum";

test("twoSum [-3, 1, 3, 11] target: 0 to equal [0, 2]", () => {
  expect(twoSum([-3, 1, 3, 11], 0)).toEqual([0, 2]);

  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);

  expect(twoSum([2, 7, 11, 15], 0)).toEqual([-1, -1]);
});
