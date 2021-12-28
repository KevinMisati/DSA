class Node():
    def __init__(self, val):
        self.val = val
        self.next = None


a = Node("A")
b = Node("B")
c = Node("C")
d = Node("D")

a.next = b
b.next = c
c.next = d


""" def print_list(head):
    current = head
    while current !=None :
        print(current.val)
        current = current.next """

def print_list(head):
    if head == None:
        return
    current = head
    print(current.val)
    print_list(current.next)

print_list(a)
    