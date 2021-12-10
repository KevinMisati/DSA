
graph = {
    'a':['b','c'],
    'b':['d','e'],
    'c':['f','g'],
    'd':[],
    'e':[],
    'f':[],
    'g':[]
}
stack=[]

#iteration
def dfs(graph,target):
    stack = [target]
    print (stack)

    while (len(stack) > 0):
        current = stack.pop()
        print(current)
        for neighbour in graph[current]:
            stack.append(neighbour)

#recursion
""" def dfs(graph,target):
    print(target)
    stack.append(target)

    current = graph[target]
    for i in current:
        dfs(graph,i) """


dfs(graph,'a')
print(stack)