
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    return recursion(root, k, [0]);
};

let recursion = (curRoot, k, counter) => {
    if (!curRoot) return null;

    // Traverse left first
    let result = recursion(curRoot.left, k, counter);
    if (result != null) return result;

    counter[0]++;
    if (counter[0] === k) return curRoot.val;

    let rightResult = recursion(curRoot.right, k, counter);
    return rightResult;
}

root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

console.log(kthSmallest(root, 1)); // Output: 1

root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
console.log(kthSmallest(root, 3)); // Output: 3