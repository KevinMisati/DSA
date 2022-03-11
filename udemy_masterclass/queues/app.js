const { timeStamp } = require("console")

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first) return null
        let temp  = this.first
        if(this.first == this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.val
    }
}

let queue = new Queue()
console.log(queue.enqueue("Hello"))
console.log(queue.enqueue("Welcome"))
console.log(queue.enqueue("Home"))

console.log(queue.dequeue())

/* 
insertion -     O(1)
Removal -     O(1)
searching -     O(N)
access -     O(N)

*/