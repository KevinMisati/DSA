graph = {
    'a':['c','b'],
    'b':['d','e'],
    'c':['f','g'],
    'd':[],
    'e':[],
    'f':[],
    'g':[]
}


#iteration
""" def dfs(graph,target):
    stack = [target]

    while (len(stack) > 0):
        current = stack.pop()
        print(current)
        for neighbour in graph[current]:
            stack.append(neighbour) """

#recursion
stack=[]
def dfs(graph,target):
    
    print(target)

    current = graph[target]
    for neighbour in current:
        dfs(graph,neighbour)


dfs(graph,'a')
print(stack)