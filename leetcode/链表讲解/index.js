/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    // let d=head,o=head.next,frist=head.next;
    // while(o.next||o){
    //     d.next=o.next;
    //     o.next=o.next.next
    //     d=d.next;
    //     o=o.next;
    // }
    // d.next=frist;
    // return head

    // let l1={val:null,next=null},l2={val:null,next=null};
    // let i=1,current=head;
    // while(current){
    //     if(i%2==0){
    //         l1.next=current  
    //     }else{
    //         l2.next=current
    //     }
    //     current=current.next;
    //     l1=l1.next;
    //     l2=l2.next;
    //     i++;

    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    var oddEvenList = function(head) {

        let l1 = { val: null, next: null },
            l2 = { val: null, next: null };
        let i = 1,
            current = head,
            l1current = l1,
            l2current = l2;
        while (current) {
            if (i % 2 !== 0) {
                l1current.next = current
                l1current = l1current.next;

            } else {
                l2current.next = current
                l2current = l2current.next;

            }
            current = current.next;
            // l1current=l1;
            // l2current=l2;
            i++;
        }
        if (i % 2 !== 0) {
            l1current.next = null;
        } else {
            l2current.next = null;
        }
        l1current.next = l2.next;
        // console.log(l1)
        return l1.next;
    }
}