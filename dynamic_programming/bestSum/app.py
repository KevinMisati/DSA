def bestSum(targetSum, numbers, memo={}):

    if targetSum in memo.keys():
        return memo[targetSum]
    
    if targetSum == 0:
        return []
    
    if targetSum < 0:
        return None
    
    shortestCombination = None

    for num in numbers:
        remainder = targetSum-num
        remainderCombination = bestSum(remainder, numbers, memo)
        if remainderCombination != None:
            combination = remainderCombination+[num]
            # if the combination is shorter than the current 'shortest' update it
            if (shortestCombination == None) or (len(combination) < len(shortestCombination)):
                shortestCombination = combination
 
    memo[targetSum] = shortestCombination;
    return shortestCombination

print(bestSum(8,[1,4,5]))#4,4
print(bestSum(7,[5,3,4,7]))#7
print(bestSum(8,[2,3,5]))#5,3
print(bestSum(7,[2,3,5]))#5,2
print(bestSum(100,[1,2,5,25]))#25,25,25,25