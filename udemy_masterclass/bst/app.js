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

    bfs(){
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)
        while(queue.length){
            node = queue.shift()
            data.push(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }

    preDFS(){
        let data = []
        let current = this.root
        let traverse = (node) => {
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)

        return data
    }
    proDFS() {
        let data = []
        let current = this.root
        let traverse = (node) => {
            
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)

        return data
    }
    inorderDFS() {
        let data = []
        let current = this.root
        let traverse = (node) => {

            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(current)

        return data
    }
    
}

let tree = new BinarySearchTree
tree.insert(20)
tree.insert(10)
tree.insert(6)
tree.insert(17)
tree.insert(30)
tree.insert(25)
tree.insert(50)
//console.log(tree.find(20))
//console.log(tree.bfs())
//console.log(tree.preDFS())
//console.log(tree.proDFS())
console.log(tree.inorderDFS())
 
//                                                20 
//                                 10                             30
//                    6                     17               25            50
//                                    



//console.log(tree)