export function lengthOfLongestSubstring(s: string) {
  let tempStr = "";
  let maxCount = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s.charAt(i);

    if (tempStr.indexOf(char) === -1) {
      tempStr += char;
    } else {
      maxCount = Math.max(tempStr.length, maxCount);
      tempStr += char;
      const index = tempStr.indexOf(char);
      tempStr = tempStr.substring(index + 1, tempStr.length);
    }
  }

  return Math.max(tempStr.length, maxCount);
}
