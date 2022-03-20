//tabulation

const fibTab = (n) => {
    if (n <=2) {
        return 1
    }
    let fibNums = [0,1,1]

    for(i= 3;i<=n;i++){
        fibNums[i] = fibNums[i-1] + fibNums[i - 2]
    }
    return fibNums[n]
}






//memoization
const fib = (n,visited={}) => {
    if(visited[n]) return visited[n]
    if (n <=2) return 1
    visited[n] =  fib(n-1,visited) + fib(n-2,visited)
    return visited[n]
}
//console.log(fib(1001))
console.log(fibTab(2001))