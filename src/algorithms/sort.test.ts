import { describe, it, expect } from '@jest/globals';
import sort from './sort';

describe('sorting algorithms', () => {
  it('sorts elements correctly', () => {
    const input = [9, 6, 1, 10, 34];
    const expected = [1, 6, 9, 10, 34];
    expect(sort.bubble(input)).toEqual(expected);
  });
});
