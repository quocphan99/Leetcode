/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let curNode = head;
    let nextNode = head.next;
    let prevNode = null;

    while (curNode && nextNode) {
        let temp = nextNode.next;

        nextNode.next = curNode;
        curNode.next = temp;
        if (prevNode) {
            prevNode.next = nextNode;
        } else {
            head = nextNode;
        }
        prevNode = curNode;
        curNode = temp;
        if (curNode) {
            nextNode = curNode.next;
        } else {
            nextNode = null;
        }
    }

    return head;
};