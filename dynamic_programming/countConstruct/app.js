const countConstruct = (target,wordbank,memo={}) => {
    if (target in memo){
        return memo[target]
    }
    if (target == ""){
        return 1
    }
    let count = 0

    for (let word of wordbank){
        if (target.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            let numOfWays = countConstruct(suffix,wordbank,memo)
            count += numOfWays

        }
    }
    memo[target] = count
    return count
}
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))//1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))//0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))//1
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    ["e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee"
    ]))//0
