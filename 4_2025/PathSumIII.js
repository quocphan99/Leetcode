
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let map = {};
    map[0] = 1; // Initialize with sum 0 to handle paths that start from the root
    counter = 0;

    let recursion = (curRoot, targetSum, curSum) => {
        if (!curRoot) return 0;
    
        curSum += curRoot.val;
        if (map[curSum - targetSum]) {
            counter += map[curSum - targetSum];
        }

        if (map[curSum]) {
            map[curSum]++;
        } else {
            map[curSum] = 1;
        }
    
        recursion(curRoot.left, targetSum, curSum);
        recursion(curRoot.right, targetSum, curSum);
        
        map[curSum]--; // Decrement the count for the current sum after exploring both subtrees
    }

    recursion(root, targetSum, 0);  
    return counter;
};

root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(11);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);
console.log(pathSum(root, 8)); // Output: 3

root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);
root.right.right.left = new TreeNode(5);
console.log(pathSum(root, 22)); // Output: 3