def merge(L1,L2):
    dumm = tail = ListNode()

    while L1 and L2:
        if L1.val < L2.val:
            tail.next = L1
            L1 = L1.next
        else:
            tail.next = L2
            L2 = L2.next
        tail = tail.next
    
    tail.next = L1 or L2
    return dumm.next
            