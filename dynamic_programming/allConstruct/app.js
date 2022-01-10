const allConstruct = (target,wordbank,memo={}) => {
    if (target in memo){
        return memo[target]
    }
    if (target === ""){
        return [[]]
    }
    let result = []

    for (let word of wordbank){
        let arr = []
        if (target.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            let suffixWays = allConstruct(suffix,wordbank,memo)
            let targetWays = suffixWays.map(way => [word,...way])
            result.push(...targetWays)
        }
    }
    memo[target] = result
    return result
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))//1
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd","ef","c"]))//1
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))//0
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))//1
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    ["e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee"
    ]))//0
