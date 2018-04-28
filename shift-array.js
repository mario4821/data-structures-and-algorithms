'use strict';

module.exports = (arr, val) => {
  const split = Math.round(arr.length / 2);
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === split && val !== undefined) {
      newArr.push(val);
    }
    newArr.push(arr[i]);
  }
  return newArr;
};
