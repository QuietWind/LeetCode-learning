export class ListNode {
  public next: ListNode | null;
  constructor(public val: number) {
    this.next = null;
  }
}

export function parseNumArrToNode(numArr: number[]): ListNode {
  let index = 0;
  let rn = new ListNode(0);
  let prev: ListNode | null = null;

  while (numArr[index] !== undefined) {
    const node = new ListNode(numArr[index]);
    if (prev) {
      prev.next = node;
    } else {
      rn = node;
    }
    prev = node;
    index++;
  }

  return rn;
}

export const parseNodeToNumArr = (
  node: ListNode,
  prefixNumArr: number[] = []
): number[] => {
  const currentNum = node.val;
  const nodeStr: number[] = prefixNumArr.concat(currentNum);

  if (node.next !== null) {
    return parseNodeToNumArr(node.next, nodeStr);
  }

  return nodeStr;
};

export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  let rNode = new ListNode(0);
  let prev: ListNode | null = l1;
  let next: ListNode | null = l2;
  let isFirst = true;
  let currentNode = rNode;
  let carry = 0;

  while (prev !== null || next !== null) {
    const sum = (prev ? prev.val : 0) + (next ? next.val : 0) + carry;
    const val = sum >= 10 ? sum % 10 : sum;
    const node = new ListNode(val);

    carry = Math.floor(sum / 10);

    if (isFirst) {
      rNode = node;
      isFirst = false;
    } else {
      currentNode.next = node;
    }

    currentNode = node;

    prev = prev ? prev.next : null;
    next = next ? next.next : null;
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry);
  }

  return rNode;
}
