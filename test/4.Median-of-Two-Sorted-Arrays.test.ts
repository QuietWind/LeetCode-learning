import { findMedianSortedArrays } from "./../src/4.Median-of-Two-Sorted-Arrays";

test("4.Median-of-Two-Sorted-Arrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);

  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);

  expect(findMedianSortedArrays([2], [])).toBe(2);

  expect(
    findMedianSortedArrays(
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22
      ],
      [0, 6]
    )
  ).toBe(10.5);
});
