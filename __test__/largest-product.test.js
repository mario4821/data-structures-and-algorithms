'use strict';

const highestProduct = require('../largest-product.js');

describe('largest-product.js', () => {
  test('Largest product of two adjacent values in array', () => {
    expect(highestProduct.largestProduct([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
  });
  test('Array of all zeros should return 0', () => {
    expect(highestProduct.largestProduct([0, 0], [0, 0], [0, 0])).toEqual(0);
  });
  test('No input should return 0', () => {
    expect(highestProduct.largestProduct([])).toEqual(0);
  });
});
