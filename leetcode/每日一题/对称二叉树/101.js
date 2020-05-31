/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @author qzj
 */
//第一版
var isSymmetric = function(root) {
    // !root || check(root.left, root.right)
    return !root || back(root.left, root.right);

    function back(node1, node2) {
        if (node1 == null && node2 == null)
            return true;
        if (node1 == null || node2 == null)
            return false;
        // if(node1!=null&&node2==null)
        // return false;
        if (node1.val == node2.val && back(node1.left, node2.right) && back(node1.right, node2.left))
            return true;
        return false;


    }
};
//第二版
var isSymmetric = function(root) {
    // !root || check(root.left, root.right)
    return !root || back(root.left, root.right);

    function back(node1, node2) {
        if (!node1 && !node2)
            return true;
        if (!node1 || !node2)
            return false;
        // if(node1!=null&&node2==null)
        // return false;
        return (node1.val == node2.val && back(node1.left, node2.right) && back(node1.right, node2.left)) ? true : false;


    }
};