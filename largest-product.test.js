'use strict';

const largest = require('../largest-product');

describe('largest-product.js', () => {
  test('Highest sum of adjacent numbers in array', () => {
    expect(largest([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
  });
});
