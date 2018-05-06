/**
 *
 * @param numArr
 * @param target
 * @return number[]
 */
export function twoSum(numArr: number[], target: number): number[] {
  for (let i = 0; i < numArr.length - 1; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}
