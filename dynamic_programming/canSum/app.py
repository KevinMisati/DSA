"""
given target sum and an array of numbers, return true if the numbers can be added in whichever manner to produce the targetsum,duplicates are allowed
"""


def canSum(targetsum,numbers,memo={}):
    if targetsum in memo:
        return memo[targetsum]
    if targetsum == 0:
        return True
    if targetsum < 0:
        return False
    for i in numbers:
        rem = targetsum - i
        if canSum(rem,numbers,memo) == True:
            memo[targetsum] = True
            return memo[targetsum]
    memo[targetsum] = False
    return memo[targetsum]
#o(n*m) time
#O(m)
print(canSum(7,[2,3]))#true
print(canSum(7,[5,3,4]))#true
print(canSum(7,[2,4]))#false
print(canSum(7,[2,3,5]))#true
print(canSum(300,[7,14]))#false