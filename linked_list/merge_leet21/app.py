#implementation
class Node:
    def __init__(self,val):
        self.val = val
        self.next = None

one = Node(1)
two = Node(2)
three = Node(3)
four = Node(4)
five = Node(5)

one.next = two
two.next = three
three.next = four
four.next = five

#traversal and printing
def traverse_list(head):
    while head != None:
        print(head.val)
        head = head.next

#traverse_list(one)

#adding all the elements
def add_list(head):
    sum = 0
    while head != None:
        sum += head.val
        head = head.next
    print(sum)

#add_list(one)

#reverse a list
def reverse_list(head):
    prev = None
    current = head
    while current is not None:
        next = current.next
        current.next = prev
        prev = current
        current = next
    return prev
print(reverse_list(one))

#linked list cycle 
class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        fast = slow = head
        while slow and fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
            if slow == fast:
                return True
        return False

