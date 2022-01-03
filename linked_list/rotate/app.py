class Node():
    def __init__(self, val):
        self.val = val
        self.next = None


a = Node("A")
b = Node("B")
c = Node("C")
d = Node("D")
e = Node("E")
f = Node("F")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
# a -> b -> c -> d -> e -> f

def rotateRight(head,k):
    if head is None:
        return head
    
    #culculkate the total length
    #determine the last element which we will set it`s next to the head
    #tail.next = head
    totalLength = 1
    tail = head
    while tail.next:
        tail = tail.next
        totalLength +=1
    #number of rotations
    #modulus when k > total Length
    k = k % totalLength
    if k == 0:
        return head

    #move to the Kth node
    cur = head
    for i in range(totalLength - k - 1):
        cur  = cur.next
    new_head = cur.next
    tail.next = head
    cur.next = None
    return new_head.val

print(rotateRight(a,4))