const gridTravellerTab = (m,n) => {
    const table = Array(m+1)
    .fill()
    .map(() => Array(n+ 1).fill(0))
    table[1][1] = 1

    for (let r = 0; r <= m; r++){
        for (let c =0; c <= n; c++){
            const current = table[r][c]
            if (r +1 <= m)   table[r+1][c] += current
            if (c + 1 <= n)   table[r][c + 1] += current
        }
    }
    return table[m][n]
}

console.log(gridTravellerTab(2,3))
console.log(gridTravellerTab(2,4))
console.log(gridTravellerTab(20,6))