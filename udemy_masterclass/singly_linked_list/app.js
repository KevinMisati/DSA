class Node{
    constructor(val){
        this.val = val
        this.head=null
        this.tail = null
        
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.val = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }
    pop(){
        if(!this.head){
            return undefined
        }
        else{
            let current = this.head
            let newTail = current
            while(current.next){
                newTail = current
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null
            this.length--
            return current
        }
    }

    shift(){
        if(!this.head){
            return undefined
        }
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        return currentHead
    }
    unshift(val){
        let newHead = new Node(val)
        if(!this.head){
            this.head = newHead
            this.tail = newHead
        }
        else{
        let currentHead = this.head
        this.head = newHead
        this.head.next = currentHead
        }
        this.length++
        return newHead
}
    get(index){
        if (index < 0 || index > this.length){
            return undefined
        }
        else{
            let counter = 0
            let current = this.head
            while(counter != index){
                counter++
                current = current.next
            }
            return current
        }
    }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Welcome")
list.push("Home")

console.log(list.get(2))
//console.log(list.unshift("Kevin"))
//console.log(list.shift())
//console.log(list.shift())
//console.log(list)
//console.log(list.pop())
//console.log(list.pop())
//