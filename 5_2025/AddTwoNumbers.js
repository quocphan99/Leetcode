
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let firstSum = l1.val + l2.val;
    let result = new ListNode(firstSum % 10);
    let carry = Math.floor(firstSum / 10);
    let resultFirstNode = result;
    let firstNode = l1.next;
    let secondNode = l2.next;

    while(firstNode != null && secondNode != null) {

        let sum = firstNode.val + secondNode.val + carry;
        carry = Math.floor(sum / 10);
        result.next = new ListNode(sum % 10);
        result = result.next;
        firstNode = firstNode.next;
        secondNode = secondNode.next;
    }

    while(firstNode != null) {
        let sum = firstNode.val + carry;
        carry = Math.floor(sum / 10);
        result.next = new ListNode(sum % 10);
        result = result.next;
        firstNode = firstNode.next;
    }

    while(secondNode != null) {
        let sum = secondNode.val + carry;
        carry = Math.floor(sum / 10);
        result.next = new ListNode(sum % 10);
        result = result.next;
        secondNode = secondNode.next;
    }

    if (carry > 0) {
        result.next = new ListNode(carry);
    }
    return resultFirstNode;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));

