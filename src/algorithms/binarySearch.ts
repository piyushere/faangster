/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unreachable-loop */

export const binarySearchDynamic = (input: number[], predicate: number) => {
  let searchArray = input;
  while (searchArray.length) {
    const midIndex = Math.floor(searchArray.length / 2);
    if (searchArray[midIndex] === predicate) return true;
    if (searchArray[midIndex] < predicate) {
      searchArray = searchArray.slice(midIndex + 1);
    } else {
      searchArray = searchArray.slice(0, midIndex);
    }
  }
  return false;
};

export const binarySearchRecursive = (
  input: number[],
  predicate: number
): boolean => {
  const mid = Math.floor(input.length / 2);
  if (!input.length) return false;
  if (input[mid] === predicate) return true;

  if (input[mid] > predicate)
    return binarySearchRecursive(input.slice(0, mid), predicate) as boolean;
  return binarySearchRecursive(input.slice(mid + 1), predicate);
};
