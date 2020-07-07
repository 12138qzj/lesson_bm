/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let ten = 0;
    let res = 0;
    let result = l2;
    let pre;
    while (l1 || l2) {
        if (l1 && !l2) {
            // console.log("l2",l2,l1)
            pre.next = l1;
            //    console.log("l2",l2,l1) 
            while (l1) {
                let sum = l1.val + ten;
                if (sum >= 10) {
                    l1.val = sum - 10;
                    ten = 1;
                } else {
                    l1.val = sum;
                    ten = 0;
                }
                pre = l1;
                l1 = l1.next;
            }
            // console.log("res",result)
            ten === 1 ? pre.next = new ListNode(1) : "";

            return result;

        }
        if (!l1 && l2) {
            // l2.val=ten===1?l2.val+1:l2.val;
            // console.log(result,l2);
            while (l2) {
                let sum = l2.val + ten;
                if (sum >= 10) {
                    l2.val = sum - 10;
                    ten = 1;
                } else {
                    l2.val = sum;
                    ten = 0;
                }
                pre = l2;
                l2 = l2.next;

            }

            console.log(ten, l2);

            // console.log("l2",l2)
            ten === 1 ? pre.next = new ListNode(1) : "";

            return result;
        }
        let sum = l1.val + l2.val + ten;
        if (sum >= 10) {
            res = sum - 10;
            ten = 1;
        } else {
            res = sum;
            ten = 0;
        }
        // console.log(res)
        l2.val = res;
        pre = l2;
        l1 = l1.next;
        l2 = l2.next;
    }
    ten === 1 ? pre.next = new ListNode(1) : "";

    return result;

};





// 第二版
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let ten = 0;
    let result = l2;
    let pre;
    while (l1 || l2) {
        if (l1 && !l2) {
            pre.next = l1;
            while (l1) {
                let sum = l1.val + ten;
                ten = parseInt(sum / 10);
                sum = sum % 10;
                l1.val = sum;
                pre = l1;
                l1 = l1.next;
            }
            ten === 1 ? pre.next = new ListNode(1) : "";
            return result;
        }
        if (!l1 && l2) {
            while (l2) {
                let sum = l2.val + ten;
                ten = parseInt(sum / 10);
                sum = sum % 10;
                l2.val = sum;
                pre = l2;
                l2 = l2.next;
            }
            ten === 1 ? pre.next = new ListNode(1) : "";
            return result;
        }
        let sum = l1.val + l2.val + ten;
        ten = parseInt(sum / 10);
        sum = sum % 10;
        l2.val = sum;
        pre = l2;
        l1 = l1.next;
        l2 = l2.next;
    }
    ten === 1 ? pre.next = new ListNode(1) : "";

    return result;

};