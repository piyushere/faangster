/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-constructor */
// eslint-disable-next-line max-classes-per-file
export interface IListNode<T> {
  value: T;
  next?: IListNode<T>;
}

export class ListNode<T> implements IListNode<T> {
  constructor(
    public value: T,
    public next?: ListNode<T>
    // eslint-disable-next-line no-empty-function
  ) {}
}

class LinkedList<T> {
  headNode: ListNode<T>;

  tailNode: ListNode<T>;

  constructor(
    public value: T
    // eslint-disable-next-line no-empty-function
  ) {
    this.headNode = new ListNode(this.value);
    // initially the tailNode will be pointing to headNode
    this.tailNode = this.headNode;
  }

  insert(newNode: ListNode<T>) {
    let currentNode: ListNode<T> = this.headNode;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    while (currentNode.next) {
      currentNode = currentNode?.next;
    }
    currentNode.next = newNode;
    return this.headNode;
  }

  //   remove(index: number) {
  //     let cursor = 0;
  //     let currentNode: ListNode<T> | undefined = this.headNode;
  //     while (currentNode?.value !== value) {
  //       currentNode = currentNode?.next;
  //     }
  //     if(!currentNode) return false
  //     else
  //   }

  insertEnd(newNode: ListNode<T>) {
    this.tailNode.next = newNode;
    this.tailNode = this.tailNode.next;
  }

  insertStart(newNode: ListNode<T>) {
    newNode.next = this.headNode;
    this.headNode = newNode;
  }

  iterator() {
    let currentNode = this.headNode;
    return function* () {
      yield currentNode.value;
      while (currentNode?.next) {
        yield currentNode?.next.value;
        currentNode = currentNode.next;
      }
    };
  }

  /**
   * reverse the linked list, using recursion
   */
  reverse(node?: ListNode<T>, previousNode?: ListNode<T>) {
    if (node) this.headNode = node;
    const nextNode = this.headNode.next;
    this.headNode.next = previousNode;
    if (nextNode) this.reverse(nextNode, this.headNode);
  }

  /**
   * reverse the linked list, using looping
   */
  reverseLoop() {
    let prevNode: ListNode<T> | undefined;
    let currentNode: ListNode<T> | undefined = this.headNode;
    let nextNode: ListNode<T> | undefined;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      [prevNode, currentNode] = [currentNode, nextNode];
    }
    if (prevNode) this.headNode = prevNode;
  }

  /**
   *  Start putting the elements at the start next to the initial last element
   * */
  reverseAlternate() {
    let tailNode = this.headNode;
    while (tailNode.next) {
      tailNode = tailNode.next;
    }
    let startNode: ListNode<T> | undefined = this.headNode;
    while (startNode !== tailNode && startNode.next) {
      const tailExtension = tailNode.next;
      [tailNode.next, startNode] = [startNode, startNode.next];
      tailNode.next.next = tailExtension;
    }
    this.headNode = tailNode;
    return this.headNode;
  }
}

export default LinkedList;
