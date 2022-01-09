#number of ways you can travel from top left to bottom right corner of an m * n grid table

#unmemoized
def grid_travelle(m,n):
    if m == 0 or n == 0:
        return 0
    if m ==1  or n == 1:
        return 1
    return grid_travelle(m-1,n) + grid_travelle(m,n-1) 

#memoized
def grid_traveller(m,n,memo={}):
    grid = m,n
    if grid in memo:
        return memo[grid]
    if m == 0 or n == 0:
        return 0
    if m ==1  or n == 1:
        return 1
    memo[grid] =  grid_traveller(m-1,n) + grid_traveller(m,n-1) 
    return memo[grid] 

print(grid_traveller(70,70))
