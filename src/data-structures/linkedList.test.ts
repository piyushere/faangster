import { describe, it, expect } from '@jest/globals';
import LinkedList from './linkedList';

describe('Linked list', () => {
  const mockData: number[] = [9, 11, 45, 8, 93, 20];

  it('creates a linked list', () => {
    const list = new LinkedList<number>();
    mockData.forEach((element) => list.insert(element));
    const cursor = list.iterator();
    const actual = [...cursor()];
    expect(actual).toEqual(mockData);
  });

  it('reverses the list on calling reverse', () => {
    const expected = [20, 93, 8, 45, 11, 9];
    const list = new LinkedList<number>();
    mockData.forEach((element) => list.insert(element));
    list.reverse();
    const cursor = list.iterator();
    const actual = [...cursor()];
    expect(actual).toEqual(expected);
  });
});
