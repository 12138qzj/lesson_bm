var oddEvenList = function(head) {

    if (!head) {
        return head
    }
    let d = head,
        o = head.next,
        frist = head.next;
    while (o && o.next) {
        d.next = o.next;
        o.next = o.next.next
        d = d.next;
        o = o.next;
    }
    d.next = frist;
    return head

};