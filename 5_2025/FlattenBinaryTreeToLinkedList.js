
//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root == null) return;

    let tmpRoot = root;
    let left = root.left;
    let right = root.right;

    tmpRoot = recursion(left, tmpRoot);
    tmpRoot = recursion(right, tmpRoot);
    return root;
};

let recursion = function (node, root) {

    if (node == null) return root;

    root.right = node;
    root.left = null;
    root = root.right;
    
    let left = root.left;
    let right = root.right;

    root = recursion(left, root);
    root = recursion(right, root);
    return root;
}

let printTree = function (root) {
    if (root == null) return;

    console.log(root.val);
    printTree(root.right);
}

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);
flatten(root);
printTree(root);

// root = new TreeNode();
// console.log(flatten(root)); // []