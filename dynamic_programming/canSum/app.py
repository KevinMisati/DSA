"""
given target sum and an array of numbers, return true if the numbers can be added in whichever manner to produce the targetsum,duplicates are allowed
"""


def canSum(targetsum,numbers,mem={}):
    if targetsum in mem:
        return mem[targetsum]
    if targetsum == 0:
        return True
    if targetsum < 0:
        return False
    for i in numbers:
        remainder = targetsum - i
        if canSum(remainder,numbers) == True:
            mem[targetsum] = True
            return True
    mem[targetsum] = False
    return False


print(canSum(7,[2,3]))#true
print(canSum(7,[5,3,4]))#true
print(canSum(7,[2,4]))#false
print(canSum(7,[2,3,5]))#true
print(canSum(300,[7,14]))#false