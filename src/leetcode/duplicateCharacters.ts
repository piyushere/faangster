/* eslint-disable array-callback-return */
const sample = 'hellooworldlsehhhhhhelrhelhrsabcdetyehslncxxvoweru';

/**
 * Returns a string of unique charaters in the order of their apperance
 * @param inputString string with duplicate characters
 * @returns string with unique characters
 */
const removeDuplicates = (input: string) => {
  //   return input.split('').reduce((result, currentValue) => {
  //     if (!result.endsWith(currentValue)) return result + currentValue;
  //     return result;
  //   });
  const charHits = new Set<string>();
  let result = '';
  input.split('').forEach((element) => {
    if (!charHits.has(element)) {
      charHits.add(element);
      result += element;
    }
  });

  return result;
};

console.log(removeDuplicates(sample));
