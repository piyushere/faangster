// st3ya16hbj19djs2ac. Convert this string to ascending order in terms of alphabets as well as numbers. write logic. Don't change position of numbers in string
// Input: st3ya16hbj19djs2ac

const rearrageCharacters = (input: string) => {
  const charsArray = input.split('');
  const charType: Record<number, string> = {};
  let chars: string[] = [];
  let nums: string[] = [];

  charsArray.forEach((char, index) => {
    if (Number.isNaN(Number(char))) {
      charType[index] = 'string';
      chars.push(char);
    } else {
      charType[index] = 'number';
      nums.push(char);
    }
  });

  nums = nums.sort((a, b) => (a > b ? 1 : -1));
  chars = chars.sort((a, b) => (a > b ? 1 : -1));

  return charsArray
    .map((_, index) =>
      charType[index] === 'string' ? chars.shift() : nums.shift()
    )
    .join('');
};

const result = rearrageCharacters('st3ya16hbj19djs2ac');
console.log(result);
