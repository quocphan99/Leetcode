/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    recursiveTraversal(root, 0, result);
    return result;
};

let recursiveTraversal = function(node, level, result){
    if (node === null) return;
    if (result.length === level) result.push([]);

    result[level].push(node.val);
    recursiveTraversal(node.left, level + 1, result);
    recursiveTraversal(node.right, level + 1, result);
}

