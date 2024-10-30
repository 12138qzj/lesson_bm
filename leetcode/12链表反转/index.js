/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let cur = head;
    let pre = head;
    let temp;
    while (cur) {
        if (cur === head) {
            pre = cur;
            cur = cur.next;
            pre.next = null;
            continue;
        }
        temp = cur.next;

        cur.next = pre;
        pre = cur;
        cur = temp;
        // console.log("dsad")
        // console.log(cur);
        // cur=cur.next;
    }
    return pre;

};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head
    let pre = null
    let temp = null
    while(cur){
        temp = cur
        cur = cur.next
        temp.next = pre
        pre =  temp
    } 
    return pre
};