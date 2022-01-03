def detectCycle(head):
    if head is None:
        return h
    fast = head
    slow = head

    while fast and fast.next:
        slow= slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False