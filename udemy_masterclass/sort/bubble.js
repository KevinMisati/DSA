/* const bubbleSort = arr  => {
    for(i = 0;i< arr.length;i++){
        for (j = 0;j < arr.length - 1 - i;j++){
            console.log(arr)
            if (arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+ 1] =temp
            } 
        }
    }
    return arr
} */

const bubbleSort  = arr => {
    let noSwaps;
    for(i = arr.length;i > 0; i--){
        for (j = 0; j < i - 1; j++){
            noSwaps = true
            if (arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
                noSwaps = false
            }
            if (noSwaps) break
        }
        console.log(arr)
        console.log("One pass complete")
    }
    return arr
}

console.log(bubbleSort([3,12,5,54,2,23]))