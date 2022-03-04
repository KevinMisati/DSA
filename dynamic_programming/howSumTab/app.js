const howSumTab = (target,numbers) => {
    if (target === 0) return []
    let table = Array(target + 1).fill(null)
    table[0] = []

    for (let i =0; i<=target;i++){
        for (let num of numbers){
        if (table[i] !== null){
            table[i + num] = [...table[i],num]
        }
    }
}
return table[target]
}

console.log(howSumTab(7, [2, 3]))//3,2,2
console.log(howSumTab(7, [5, 3, 4]))//4,3
console.log(howSumTab(7, [2, 4]))//null
console.log(howSumTab(7, [2, 3, 5]))//3,2,2
console.log(howSumTab(300, [7, 14]))//null