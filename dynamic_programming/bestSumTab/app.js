const bestSumTab = (target,numbers) => {
    if (target === 0){
        return []
    }
    const table = Array(target + 1).fill(null)
    table[0] = []

    for(let i =0;i<=target;i++){
        for (let num of numbers){
            if (table[i] !== null){
                const combination = [...table[i],num]
                if (!table[i+num] || table[i + num].length > combination.length){
                    table[i + num] = combination
                }
            }
        }
    }
    return table[target]
}

console.log(bestSumTab(8, [1, 4, 5]))//#4, 4
console.log(bestSumTab(7, [5, 3, 4, 7]))//#7
console.log(bestSumTab(8, [2, 3, 5]))//#5, 3
console.log(bestSumTab(7, [2, 3, 5]))//#5, 2
console.log(bestSumTab(100, [1, 2, 5, 25]))//#25, 25, 25, 25