class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }
    //O(log n)
    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        else{
            let current = this.root
            while(true){
                if(value === current.value) return undefined
                if (value < current.value){
                    if (current.left === null){
                        current.left = newNode
                        return this
                    }
                    else{
                        current = current.left
                    }
                }
                else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode
                        return this
                    }
                    else{
                        current = current.right
                    }
                }
            }
        }
    }
//O(log n)
    find(value){
        if(!this.root) return false
        
        let current = this.root
        let found = false
        while(current && !found){
        
            if(value < current.value){
                current = current.left
            }
            else if (value > current.value){
               current = current.right
            }
            else{
                found = true
            }
            if (!found) return undefined
            return current

        }
    }
}

let tree = new BinarySearchTree
tree.insert(20)
tree.insert(10)
tree.insert(6)
tree.insert(7)
tree.insert(30)
tree.insert(50)
console.log(tree.find(20))


//console.log(tree)