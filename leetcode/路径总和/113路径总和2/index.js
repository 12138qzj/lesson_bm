/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

    // if(!root) return []
    let res = [];

    function path(node, sum, arr) {
        if (node) {
            sum -= node.val;
            arr.push(node.val)
            if (node.left === null && node.right === null && sum === 0) {
                res.push(arr)
            }
            path(node.left, sum, [...arr])
            path(node.right, sum, [...arr])
        }
    }
    path(root, sum, []);

    return res;


};