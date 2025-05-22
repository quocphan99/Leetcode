
// Definition for a _Node.
function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    let map = new Map();
    let current = head;
    let counter = 0;
    while (current) {
        map.set(current, counter);
        counter++;
        current = current.next;
    }

    let newNodeList = new Array(counter);
    for (let i = 0; i < counter; i++) {
        newNodeList[i] = new _Node(0, null, null);
    }

    current = head;
    counter = 0;
    let newCurrent = newNodeList[counter];
    while(current) {
        newCurrent.val = current.val;
        if (current.next) {
            newCurrent.next = newNodeList[map.get(current.next)];
        }
        if (current.random) {
            newCurrent.random = newNodeList[map.get(current.random)];
        }
        current = current.next;
        newCurrent = newCurrent.next;
    }

    return newNodeList[0];
};

// Example usage:
let node1 = new _Node(1, null, null);
let node2 = new _Node(2, null, null);
let node3 = new _Node(3, null, null);
let node4 = new _Node(4, null, null);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node1.random = node3;
node2.random = node1;
node3.random = node4;
node4.random = node2;
let head = node1;
console.log(copyRandomList(head)); // Output: 1 -> 2 -> 3 -> 4 with random pointers