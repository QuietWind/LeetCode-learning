import { lengthOfLongestSubstring } from "./../src/3.Longest-Substring-Without-Repeating-Characters";

test("3.Longest-Substring-Without-Repeating-Characters.ts", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);

  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);

  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});
