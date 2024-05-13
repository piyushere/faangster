/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

const bubble = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const largerElem = array[i];
        array[i] = array[j];
        array[j] = largerElem;
      }
    }
  }
  return array;
};

export default { bubble };
