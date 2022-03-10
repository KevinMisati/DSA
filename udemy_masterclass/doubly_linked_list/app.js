class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    //O(1)
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
        
    }
        //O(1)
    pop(){
        if (!this.head) return undefined
        let poppedNode = this.tail
        if(this.length == 1) {
            this.head = null
            this.tail = null
        }
        else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        
        this.length--
        return poppedNode
    }
        //O(1)
    shift(){
        
        if(!this.head){
            return undefined
        }
        let shiftedNode = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = shiftedNode.next
            this.head.prev = null
            this.prev = null
            shiftedNode.next = null
        }
        this.length--
        return shiftedNode
    }
        //O(1)
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        let currentHead = this.head
        this.head = newNode
        this.head.next = currentHead
        currentHead.prev = newNode
        this.length++
        return this
    }
        //O(N)
    get(index){
        if (index < 0 || index >= this.length) return null
        let count,current
        if (index <= this.length / 2){
            count = 0
            current = this.head
            while(count !== index){
                current = current.next
                count++
                
            }
        }
        else{
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
               
            }
        }
        return current
    }
        //O(N)
    set(index, val) {
        let found = this.get(index)
        if (found) {
            found.val = val
            return found
        }
    }
    //    //O(1) or O(N)
    insert(index,val){
        if (index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)

        let newNode  = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        afterNode.prev = newNode
        newNode.next = afterNode
        this.lenth++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length ) return false
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let removeNode = this.get(index)
        let beforeNode = removeNode.prev
        let afterNode = removeNode.next
        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        removeNode.next = null
        removeNode.prev = null
        this.length--
        return removeNode

    }
}

let list = new DoublyLinkedList()
list.push("Hello")
list.push("Welcome")
list.push("Home")

console.log(list.remove(2))
//console.log(list.insert(0,"Kevin"))
//console.log(list.get(0))
//console.log(list.set(1,"Kevin"))
//list.reverse()
//console.log(list.print())

//console.log(list.remove(1))

//console.log(list.unshift("Kevin"))
//console.log(list.shift())
//console.log(list.shift())
//console.log(list.shift())

//console.log(list.pop())
//console.log(list.pop())
//console.log(list.pop())
//console.log(list.pop())
//console.log(list)