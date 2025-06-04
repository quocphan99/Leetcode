
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let foundInChildrenP = recursion1(p, q);
    if (foundInChildrenP) {
        return p;
    }
    let foundInChildrenQ = recursion1(q, p);
    if (foundInChildrenQ) {
        return q;
    }

    let result = [];
    recursion2(root, p, q, result);
    if (result.length > 0) {
        return result[0];
    } else {
        return null;
    }
};

let recursion1 = (curRoot, q) => {
    if (curRoot === null) return false;
    if (curRoot.val === q.val) return true;

    let left = recursion1(curRoot.left, q);
    if (left) return true;
    let right = recursion1(curRoot.right, q);
    if (right) return true;
}

let recursion2 = (curRoot, p, q, result) => {
    if (curRoot === null) return null;
    if (curRoot.val === p.val || curRoot.val === q.val) {
        return true;
    }

    let left = recursion2(curRoot.left, p, q, result);
    if (result.length > 0) {
        return true;
    }
    let right = recursion2(curRoot.right, p, q, result);
    if (result.length > 0) {
        return true;
    }

    if (left && right) {
        result.push(curRoot);
        return true;
    } else if (left || right) {
        return true;
    } else {
        return false;
    }
}


root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
p = root.left; // 5
q = root.left.right.right; // 4
console.log(lowestCommonAncestor(root, p, q).val); // Output: 5

p = root.left; // 5
q = root.right; // 1
console.log(lowestCommonAncestor(root, p, q).val); // Output: 3