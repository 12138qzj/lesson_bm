/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * 思路：1. 将最上层的结点存放在队列中，
 *      2. 将循环队列复制一份，清空之前的队列，然后循环复制好队列中有多少个结点
 *      3. 循环结点将每一个结点中val 加入在数组中，
 *      4. 然后检测每一个结点是否存在子节点，存在则将子节点存放在队列中
 *      5. 判断队列中是发放还存在元素，存在则还没遍历完，不存在则遍历完成
 *      6. 输出数组（结果）
 */
var levelOrder = function(root) {
    if (root == null) return [];
    let queue = [root];
    // let queue = [ root.left, root.right ];  // 假设处于第二层 也能够把第三层 追加到队尾
    let res = [];
    while (queue.length) {
        // 上一层的元素都出队列
        let rowNodes = queue.splice(0);
        // 下一层的元素 拿到上一层的所有元素 遍历上一层所有有元素，取出所有 .left .right
        for (let node of rowNodes) {
            res.push(node.val);
            // 假设 既没有没有 left right 二叉树的最底下这层 queue.length === 0
            // 将节点存放在队列中
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return res;
};

var levelOrder = function(root) {
    if (root === null) return [];
    let qure = [root];
    let res = [];
    while (qure.length) {
        let temp = qure.splice(0);
        for (let node of temp) {
            res.push(node.val)
            if (node.children) {
                for (let childrennode of node.children) {
                    qure.push(childrennode)
                }
            }
        }

    }
    return res;
};

function levelOrder11(root) {
    if (!root) return

    let qure = [root]
    let res = [];
    while (qure.length) {
        let temp = qure.splice(0);
        for (let node of temp) {
            res.push(node.val)
            if (node.children) {
                for (let childrennode of node.children) {
                    qure.push(childrennode)
                }
            }
        }
    }
    return res;
}