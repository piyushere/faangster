/**
 * Find longest consecutive subsequence of same characters
 * @param input string
 * @returns Object with the substring and charater count
 */
const longestSubsequence = (input: string) => {
  const chars = input.split('');
  const result = {
    start: 0, // start index
    count: 0, // total elements
  };

  let charCount = 0;
  let charStart = 0;
  let currentChar = chars[0];

  chars.forEach((char, index) => {
    if (char !== currentChar) {
      currentChar = char;
      charStart = index;
      charCount = 0;
    }
    charCount += 1;
    if (charCount > result.count) {
      result.start = charStart;
      result.count = charCount;
    }
  });
  return {
    sequence: input.slice(result.start, result.start + result.count),
    count: result.count,
  };
};

export default longestSubsequence;
