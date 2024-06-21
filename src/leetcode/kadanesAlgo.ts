const inputArray = [4, -3, 8, -9, 6];

const largestSubarray = (array: number[]) => {
  let largestSum = 0;
  let startIdx = 0;
  let endIdx = 0;

  let currentSum = 0;
  array.forEach((elem, idx) => {
    currentSum += elem;
    if (elem > currentSum) {
      currentSum = elem;
      startIdx = idx;
    }

    if (currentSum > largestSum) {
      endIdx = idx;
      largestSum = currentSum;
    }
  });

  console.log(largestSum);
  return array.slice(startIdx, endIdx + 1);
};

console.log(largestSubarray(inputArray));
export default largestSubarray;
