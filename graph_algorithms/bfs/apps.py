
graph = {
    'a':['b','c'],
    'b':['d','e'],
    'c':['f','g'],
    'd':[],
    'e':[],
    'f':[],
    'g':[]
}
queue=[]

#iteration
def dfs(graph,target):
    queue = [target]

    while (len(queue) > 0):
        current = queue.pop(0)
        print(current)
        for neighbour in graph[current]:
            queue.append(neighbour)


dfs(graph,'a')