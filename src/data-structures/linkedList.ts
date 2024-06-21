/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-constructor */
// eslint-disable-next-line max-classes-per-file
class ListNode<T> {
  constructor(
    public value: T,
    public next?: ListNode<T>
    // eslint-disable-next-line no-empty-function
  ) {}
}

class LinkedList<T> {
  headNode: ListNode<T> | null = null;

  tailNode: ListNode<T> | null = null;

  length = 0;

  constructor(head?: T) {
    if (head) this.insert(head);
  }

  insert(element: T, index: number = this.length) {
    const newNode = new ListNode(element);
    if (this.headNode) {
      let currentNode = this.headNode;
      while (currentNode.next) currentNode = currentNode?.next;
      currentNode.next = newNode;
    } else {
      this.headNode = newNode;
      // initially the tailNode will be pointing to headNode
      this.tailNode = this.headNode;
    }
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

  insertEnd(element: T) {
    if (!this.tailNode) this.insert(element);
    else {
      this.tailNode.next = new ListNode(element);
      this.tailNode = this.tailNode.next;
    }
  }

  insertStart(element: T) {
    if (!this.headNode) this.insert(element);
    else {
      const newNode = new ListNode(element);
      newNode.next = this.headNode;
      this.headNode = newNode;
    }
  }

  iterator() {
    let currentNode = this.headNode;
    return function* () {
      // just return undefined if nothing's there
      // we can also throw an empty list error
      if (!currentNode) yield;
      else {
        yield currentNode.value;
        while (currentNode?.next) {
          yield currentNode?.next.value;
          currentNode = currentNode.next;
        }
      }
    };
  }

  /**
   * reverse the linked list, using recursion
   */
  reverse(node?: ListNode<T>, previousNode?: ListNode<T>) {
    if (!this.headNode) throw Error('list is empty: Unable to reverse');
    if (node) this.headNode = node;
    const nextNode = this.headNode.next;
    this.headNode.next = previousNode;
    if (nextNode) this.reverse(nextNode, this.headNode);
  }

  /**
   * reverse the linked list, using looping
   */
  reverseLoop() {
    if (!this.headNode) throw Error('list is empty: Unable to reverse');
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
    if (!this.headNode) throw Error('list is empty: Unable to reverse');
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
