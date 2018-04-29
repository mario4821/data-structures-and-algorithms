'use strict';

function largestProduct(arr) {
  let highValue = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const currentArray = arr[i][j];
    
      if (arr[i - 1] !== undefined) {
        const product = arr[i - 1][j] * currentArray;
        if (product > highValue) {
          highValue = product;
        }
      }

      if (arr[i + 1] !== undefined) {
        const product = arr[i + 1][j] * currentArray;
        if (product > highValue) {
          highValue = product;
        }
      }

      if (arr[i][j - 1] !== undefined) {
        const product = arr[i][j - 1] * currentArray;
        if (product > highValue) {
          highValue = product;
        }
      } 

      if (arr[i][j + 1] !== undefined) {
        const product = arr[i][j + 1] * currentArray;
        if (product > highValue) {
          highValue = product;
        }
      }
    }
  }
  return highValue;
}

module.exports.largestProduct = largestProduct;
