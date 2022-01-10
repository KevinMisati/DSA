const bestSum = (target, numbers, memo = {}) => {
    if (target in memo){
        return memo[target]
    }
    if (target == 0){
        return []
    }
    if (target < 0){
        return null
    }
    let shortestCombination = null
    for (let num of numbers){
        let remainder = target - num
        let remCombination = bestSum(remainder, numbers,memo)

        if (remCombination !=null){
        let combination = [...remCombination,num]
        
        if (shortestCombination == null || shortestCombination.length > combination.length ){
            shortestCombination = combination
        }
    }
    }

    memo[target] = shortestCombination
    return shortestCombination
}

console.log(bestSum(8, [1, 4, 5]))//#4, 4
console.log(bestSum(7, [5, 3, 4, 7]))//#7
console.log(bestSum(8, [2, 3, 5]))//#5, 3
console.log(bestSum(7, [2, 3, 5]))//#5, 2
console.log(bestSum(100, [1, 2, 5, 25]))//#25, 25, 25, 25