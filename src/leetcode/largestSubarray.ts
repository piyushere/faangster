/* eslint-disable no-plusplus */
const inputArray = [-2, 1, -3, 4, -1, -2];
const arry2 = [-1, 4, -3, 5, -5, 6];
const arry4 = [4, -1, -2, 5, -5, 6];
const arry3 = [4, -3, 8, -9, 6];

const largestSubarray = (array: number[]) => {
  let maxSum = 0;
  let startIndex = 0; // subarray start
  let endIndex = 0; // subarray end

  let currentSum = maxSum;
  array.forEach((element, index) => {
    currentSum += element;
    if (element > currentSum) {
      startIndex = index;
      currentSum = element;
    }
    if (currentSum > maxSum) {
      endIndex = index;
      maxSum = currentSum;
    }
  });

  console.log(maxSum, array.slice(startIndex, endIndex + 1));
};

largestSubarray(arry3);
