'use strict';

const LinkedList = require('../ll_kth_from_end');

describe('find kth from end of linked list', () => {
  test('should return nodes k from end of list', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(4);
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    expect(testList.kthFromEnd(1).value).toEqual(6);
    expect(testList.kthFromEnd(2).value).toEqual(5);
    expect(testList.kthFromEnd(0).value).toEqual(7);
  });

  test('return null if no values in list', () => {
    const testList = new LinkedList();
    expect(testList.kthFromEnd(5)).toBeNull();
  });

  test('return null if value is not found in list', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(4);
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    expect(testList.kthFromEnd(7)).toBeNull();
    expect(testList.kthFromEnd(2)).not.toBeNull();
  });
});
