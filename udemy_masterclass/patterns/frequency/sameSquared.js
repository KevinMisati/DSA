/* 
    Write a function called sameSquared which accepts two arrays
    The function should return true if every value in the first array has its corresponding value squared in the second array
    The frequency of the values must be the same
 */

 //naive approach
/* const sameSquared = (arr1,arr2) => {
    if (arr1.length !==  arr2.length){
        return false
    }
    for (let val of arr1){
        for (let val2 of arr2){
            if (val**2 !== val2){
                return false
            }
        }
    }
    return true
} */


//optimised approach
const sameSquared = (arr1,arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
}


console.log(sameSquared([1, 2, 3], [4, 1, 9])); // true

console.log(sameSquared([1, 2, 3], [1, 9])); // false

console.log(sameSquared([1, 2, 1], [4, 4, 1])); // false

console.log(sameSquared([2, 3, 6, 8, 8], [64, 36, 4, 9, 64])); // true