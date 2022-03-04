const canSumTab = (target,numbers) => {
    const table = Array(target +1).fill(false)
    table[0] = true
    for (let i = 0;i<target;i++){
        if(table[i] == true){
            for(let num of numbers){
            table[i + num] = true
        }
    }
    }
    return table[target]
}

console.log(canSumTab(7, [2, 3]))//true
console.log(canSumTab(7, [5, 3, 4]))//true
console.log(canSumTab(7, [2, 4]))//false
console.log(canSumTab(7, [2, 3, 5]))//true
console.log(canSumTab(300, [7, 14]))//false