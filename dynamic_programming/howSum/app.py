"""
given target sum and an array of numbers, return an array of numbers taht can be added in whichever manner to produce the targetsum,duplicates are allowed
"""


def howSum(target, arr,memo=None):
    if memo is None:
        memo={}
    if target in memo:
        return memo[target]
    if target == 0:
        return []
    if target < 0:
        return None
    for num in arr:
        remainder = target - num
        result = howSum(remainder, arr,memo)
        if result is not None:
            result.append(num)
            memo[target] = result
            return result
    memo[target] = None
    return None


print(howSum(7,[2,3]))#true
print(howSum(7,[5,3,4]))#true
print(howSum(7,[2,4]))#false
print(howSum(7,[2,3,5]))#true
print(howSum(300,[7,14]))#false