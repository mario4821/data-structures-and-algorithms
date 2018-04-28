'use strict';

const binarySearch = module.exports = {};

binarySearch.searchKey = (array, key) => {
  const keyOne = key;
  const arrLength = array.length;
  let counter = -1;

  for (let i = 0; i < arrLength; i++) {
    if (keyOne === array[i]) {
      counter += i + 1;
      break;
    }
  }
  return counter;
};
