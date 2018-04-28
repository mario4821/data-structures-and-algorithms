'use strict';

const binaryTest = require('../binary-search');

describe('binary-search.js', () => {
  test('Should return index number of key', () => {
    expect(binaryTest.searchKey([1, 2, 3, 4], 3)).toEqual(2);
  });
  test('Should return negative if not in array', () => {
    expect(binaryTest.searchKey([1, 2, 3, 4], 5)).toEqual(-1);
  });
  test('Empty array should return -1', () => {
    expect(binaryTest.searchKey([], 3)).toEqual(-1);
  });
});
