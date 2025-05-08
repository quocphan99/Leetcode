
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    return recursizeValidBST(root, Number.MAX_VALUE, -Number.MAX_VALUE);
};

let recursizeValidBST = function(root, max, min){

    if (root.left != null) {
        if (root.left.val >= root.val || root.left.val <= min) return false;
    }
    if (root.right != null) {
        if (root.right.val <= root.val || root.right.val >= max) return false;
    }

    let isLeftValid = true;
    let isRightValid = true;

    if (root.left != null){
        isLeftValid = recursizeValidBST(root.left, root.val, min);
    }

    if (root.right != null){
        isRightValid = recursizeValidBST(root.right, max, root.val);
    }

    return isLeftValid && isRightValid;
}

// [5,4,6,null,null,3,7]

let root = new TreeNode(5);
let node4 = new TreeNode(4);
let node6 = new TreeNode(6);
let node3 = new TreeNode(3);
let node7 = new TreeNode(7);

root.left = node4;
root.right = node6;
node6.left = node3;
node6.right = node7;

// let root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

console.log(isValidBST(root));