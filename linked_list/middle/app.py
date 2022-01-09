def getMiddle(head):
    fast = slow = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow



    #User function Template for python3


    
    
    