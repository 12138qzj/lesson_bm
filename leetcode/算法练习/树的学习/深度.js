/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    let max = 0;

    function depth(node, num) {
        if (node) {
            num++;
            max = num > max ? num : max;
            depth(node.left, num);
            depth(node.right, num);
        }
    }
    depth(root, 0)
    return max;

};

function sd(node) {

    let res = []

    function deep(node) {
        if (!node) return
        res.push(node.value);
        deep(node.left)
        deep(node.right)
    }
    deep(node)
    return res;
}