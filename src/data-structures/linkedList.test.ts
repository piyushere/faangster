import { describe, it, expect } from '@jest/globals';
import LinkedList, { ListNode } from './linkedList';

describe('Linked list', () => {
  it('creates a linked list', () => {
    const array: number[] = [9, 11, 45, 8, 93, 20];
    const list = new LinkedList(12);
    array.forEach((element) => {
      const node = new ListNode(element);
      list.insert(node);
    });
    list.reverse();
    const cursor = list.iterator();
    const expected = [20, 93, 8, 45, 11, 9, 12];
    const actual = [...cursor()];
    expect(actual).toEqual(expected);
  });
});
