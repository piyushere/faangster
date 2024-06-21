/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
export interface ITreeNode<T> {
  lnode?: TreeNode<T>;
  rnode?: TreeNode<T>;
  value: T;
}

class TreeNode<T> implements ITreeNode<T> {
  constructor(
    public value: T,
    public lnode?: TreeNode<T>,
    public rnode?: TreeNode<T>
    // eslint-disable-next-line no-empty-function
  ) {}
}

class AbstractTree<T> {
  constructor(
    public rootNode: TreeNode<T>,
    public lnode?: TreeNode<T>,
    public rnode?: TreeNode<T>
    // eslint-disable-next-line no-empty-function
  ) {}

  insert(element: T) {
    const newNode = new TreeNode(element);
    let currentNode: TreeNode<T> | undefined;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    currentNode = this.rootNode;
    while (currentNode) {
      if (newNode.value > currentNode.value) {
        if (currentNode.rnode) currentNode = currentNode.rnode;
        else {
          currentNode.rnode = newNode;
          break;
        }
      } else if (currentNode.lnode) currentNode = currentNode.lnode;
      else {
        currentNode.lnode = newNode;
        break;
      }
    }
    return this;
  }

  insertRecursive(
    newNode: TreeNode<T>,
    targetNode: TreeNode<T> = this.rootNode
  ) {
    const targetLocation = newNode.value > targetNode.value ? 'lnode' : 'rnode';
    if (!targetNode[targetLocation]) {
      targetNode[targetLocation] = newNode;
    } else this.insertRecursive(newNode, targetNode[targetLocation]);
  }

  traverseRecursive(node: TreeNode<T> = this.rootNode) {
    let result: T[] = [];
    if (node.lnode) result = result.concat(this.traverseRecursive(node.lnode));
    result.push(node.value);
    if (node.rnode) result = result.concat(this.traverseRecursive(node.rnode));
    return result;
  }

  // traverse(node: AbstractTree<T> = this) {
  //   const nodes: AbstractTree<T>[] = [this];
  //   const result: T[] = [];
  //   while (1) {
  //     const node = nodes.pop();
  //     if (node) {
  //       result.push(node.value);
  //       nodes.push(node.lnode);
  //     }
  //   }
  // }
}

export default AbstractTree;
