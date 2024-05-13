// IN PROGRESS

const findRepeatingSequence = (input: string) => {
  const startIndex = 0;
  let nextIndex = 0;
  let pattern = '';

  // 'traxtraxxer traxtraxxer'
  for (let index = 1; index < input.length; index += 1) {
    if (input[index] === input[startIndex] && index - startIndex > 1) {
      nextIndex = index;
      const toMatch = input.slice(0, nextIndex);
      const matchAgainst = input.slice(nextIndex, nextIndex + toMatch.length);
      if (toMatch === matchAgainst) {
        pattern = toMatch;
      }
    }
  }
  return pattern || input;
};

export default findRepeatingSequence;
