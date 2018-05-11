function insertNumToNumsBySort(num: number, nums: number[]): number[] {
  if (nums.length === 0) {
    return [num];
  }
  let prevNum: number | null = null;

  for (let i = 0, len = nums.length; i < len; i++) {
    const currentNum = nums[i];

    if (prevNum === null && num <= currentNum) {
      return [num, ...nums];
    }
    if (prevNum && num >= prevNum && num <= currentNum) {
      return [...nums.slice(0, i), num, ...nums.slice(i)];
    }

    prevNum = currentNum;
  }

  if (prevNum !== null && num > prevNum) {
    return [...nums, num];
  }

  return nums;
}

export function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const len1 = nums1.length;
  const len2 = nums2.length;

  let aNums: number[] = nums1;
  let bNums: number[] = nums2;

  if (len1 > len2) {
    aNums = nums2;
    bNums = nums1;
  }

  for (let i = 0, len = aNums.length; i < len; i++) {
    bNums = insertNumToNumsBySort(aNums[i], bNums);
  }

  if (bNums.length === 1) {
    return bNums[0];
  }

  const index = Math.floor(bNums.length / 2);
  if (bNums.length % 2 !== 0) {
    return bNums[index];
  } else {
    return (bNums[index] + bNums[index - 1]) / 2;
  }
}
