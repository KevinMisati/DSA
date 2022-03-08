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
    //O(1)
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
    // O(N)
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
    // O(N)
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

    set(index,val){
        let found = this.get(index)
        if (found){
            found.val = val
            return true
        }
        return false
    }
    insert(index,val){
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val)

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    //O(1) or O(N)
    remove(index){
        if (index < 0 || index > this.length -1){
            return undefined
        }
        if (index === this.length -1) return this.pop()
        if (index === 0) return this.shift()

        let found = this.get(index - 1)
        let temp = found.next
        found.next = temp.next
        this.length--
        return temp
    }

    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

    reverse(){
       let node = this.head
       this.head = this.tail
       this.tail = node
       let prev = null
       let next
       for(let i =0;i<this.length;i++){
           next = node.next
           node.next = prev
           prev = node
           node = next
       }
    }
}
let list = new SinglyLinkedList()
list.push("Hello")
list.push("Welcome")
list.push("Home")

list.reverse()
console.log(list.print())

//console.log(list.remove(1))

//console.log(list.unshift("Kevin"))
//console.log(list.shift())
//console.log(list.shift())
//console.log(list)
//console.log(list.pop())
//console.log(list.pop())
//