import { describe, it, expect } from '@jest/globals';
import AbstractTree from './tree';

describe('Abstract tree', () => {
  // this should effectively sort the elements of the tree
  it('Traverses the tree correctly', () => {
    const unsortedArray: number[] = [9, 11, 45, 8, 93, 20];
    const rootNode = new AbstractTree(12);
    unsortedArray.forEach((element) => {
      const node = new AbstractTree(element);
      rootNode.insert(node);
    });
    const expected = [8, 9, 11, 12, 20, 45, 93];
    expect(rootNode.traverseRecursive()).toEqual(expected);
  });
});
