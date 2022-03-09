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
    set(index, val) {
        let found = this.get(index)
        if (found) {
            found.val = val
            return found
        }
    }
}

let list = new DoublyLinkedList()
list.push("Hello")
list.push("Welcome")
list.push("Home")

//console.log(list.get(0))
console.log(list.set(1,"Kevin"))
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