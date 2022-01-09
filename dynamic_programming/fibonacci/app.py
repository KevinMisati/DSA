#no memoization
def fibo(n):
    if n<=2:
        return 1
    return fib(n-1) + fib(n - 2)


#memoization present
def fib(n,memo={}):
    if n in memo:
        return memo[n]
    if n<=2:
        return 1
    memo[n] = fib(n-1) + fib(n - 2)
    return memo[n]



print(fib(50))
print(fib(11))
print(fib(12))
print(fib(13))
print(fib(14))

#0,1,2,3,5,8,13,21,34,55,89,......
