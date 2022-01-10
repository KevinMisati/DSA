def bestSum(target,numbers,memo={}):
    if target in memo.keys():
        return memo[target]
    if target == 0:
        return []
    if target < 0:
        return None
    shortestCombination = None
    for num in numbers:
        remainder = target - num
        remCombination = bestSum(remainder,numbers,memo)

        if remCombination != None:
            combination = remCombination + [num]
            if shortestCombination is None or len(shortestCombination) > len(combination):
                shortestCombination = combination

    memo[target] = shortestCombination
    return shortestCombination

print(bestSum(8,[1,4,5]))#4,4
print(bestSum(7,[5,3,4,7]))#7
print(bestSum(8,[2,3,5]))#5,3
print(bestSum(7,[2,3,5]))#5,2
print(bestSum(100,[1,2,5,25]))#25,25,25,25