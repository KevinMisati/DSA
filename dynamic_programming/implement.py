""" def fib(n):
    if (n <= 2):
         return 1
    return fib(n -1) + fib(n - 2) """

def fib(n,memo={}):
    if n in memo:
        return memo[n]
    if (n <= 2):
         return 1
    memo[n] = fib(n -1) + fib(n - 2)
    return memo[n]
    
print(fib(4))
print(fib(7))
print(fib(8))
print(fib(8))

