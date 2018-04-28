'use strict';

const shiftArrayTest = require('../shift-array');

describe('shift-array.js', () => {
  test('Should return even length array', () => {
    expect(shiftArrayTest([1, 2, 3], 4)).toEqual([1, 2, 4, 3]);
  });
  test('Should return odd length array', () => {
    expect(shiftArrayTest([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });
  test('Should return original array', () => {
    expect(shiftArrayTest([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
