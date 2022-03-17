class   HashTable {
    constructor(size = 17){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0
        let WEIRED_PRIME = 31
        for (let i = 0;i < Math.min(key.length,100); i++){
            let char = key[i]
            let value  = char.charCodeAt(0) - 96
            total = (total * WEIRED_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key,value){
       let index =  this._hash(key)
       if(!this.keyMap[index]){
           this.keyMap[index] = []
       }
       this.keyMap[index].push([key,value])
       return index
    }
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length ; i++){
                if (this.keyMap[index][i][0]  === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    values(){
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0;j<this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){

                    valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }
    keys(){
        let keysArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0;j<this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){

                    keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
}
//average
// Insert - O(1)
// Deletion - O(1)
//  Access - O(1)

//worst case
// Insert - O(N)
// Deletion - O(N)
//  Access - O(N)

let ht = new HashTable()
console.log(ht.set("hello world","goodbye"))
console.log(ht.set("hello world","goodbye"))
console.log(ht.set("dogs","are cool"))
console.log(ht.set("cats","are fine"))
console.log(ht.set("i love","pizza"))
//console.log(ht.get("i love"))
console.log(ht.values())
console.log(ht.keys())