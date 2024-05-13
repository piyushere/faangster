/* eslint-disable no-useless-constructor */
export interface TreeNode<T> {
  lnode?: TreeNode<T>;
  rnode?: TreeNode<T>;
  value: T;
}

class AbstractTree<T> implements TreeNode<T> {
  constructor(
    public value: T,
    public lnode?: AbstractTree<T>,
    public rnode?: AbstractTree<T>
    // eslint-disable-next-line no-empty-function
  ) {}

  insert(newNode: AbstractTree<T>) {
    let currentNode: AbstractTree<T> | undefined;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    currentNode = this;
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

  insertRecursive(newNode: AbstractTree<T>) {
    if (newNode.value > this.value) {
      if (this.rnode) this.rnode.insertRecursive(newNode);
      else this.rnode = newNode;
    } else if (this.lnode) this.lnode.insertRecursive(newNode);
    else this.lnode = newNode;
  }

  traverseRecursive(node: AbstractTree<T> = this) {
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
