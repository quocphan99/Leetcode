// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    
    let inorderMap = {};
    for (let i = 0; i < inorder.length; i++) {
        inorderMap[inorder[i]] = i;
    }

    let preorderIndex = 0;

    let recursionBuild = function (left, right) {

        if (left > right) {
            return null;
        }

        let rootValue = preorder[preorderIndex++];
        let root = new TreeNode(rootValue);

        let index = inorderMap[rootValue];

        root.left = recursionBuild(left, index - 1);
        root.right = recursionBuild(index + 1, right);

        return root;
    }

    return recursionBuild(0, inorder.length - 1);
}


let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder)); // [3,9,20,null,null,15,7]