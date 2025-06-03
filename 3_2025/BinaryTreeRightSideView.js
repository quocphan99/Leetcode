function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let result = [];
    recursion(root, 0, result);
    return result;
};

let recursion = (curRoot, deep, result) => {
    if (!curRoot) return;

    if (result.length <= deep) {
        result.push(curRoot.val);
    }

    // Traverse right first, then left
    recursion(curRoot.right, deep + 1, result);
    recursion(curRoot.left, deep + 1, result);
}

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(rightSideView(root)); // Output: [1, 3, 4]
