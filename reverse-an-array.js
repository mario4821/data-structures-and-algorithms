'use strict';

function reverseArray (arr) {
  let newArray = "";
  for(let i = arr.length - 1; i >= 0; i--) {
    newArray += arr[i];
  }
  return newArray;
}
reverseArray();