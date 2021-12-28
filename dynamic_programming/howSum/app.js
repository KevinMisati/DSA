/* 
given target sum and an array of numbers, return an array of numbers taht can be added in whichever manner to produce the targetsum, duplicates are allowed
 */


const howSum = (targetsum, numbers, memo = {}) => {
if (targetsum in memo){
    return memo[targetsum]
}
if (targetsum === 0){
    return []
}
if (targetsum < 0){
    return null
}
for (let num of numbers){
    const remainder = targetsum - num
const result = howSum(remainder, numbers, memo)
if (result !== null)
    memo[targetsum] = [...result, num]
return memo[targetsum]

}
memo[targetsum] = null
return null
}


console.log(howSum(7, [2, 3]))//true
console.log(howSum(7, [5, 3, 4]))//true
console.log(howSum(7, [2, 4]))//false
console.log(howSum(7, [2, 3, 5]))//true
console.log(howSum(300, [7, 14]))//false