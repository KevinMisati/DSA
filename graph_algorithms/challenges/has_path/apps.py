 #bfs
 def has_path(graph, src, dst):
  if src == dst:
    return True
  queue = [src]
  while len(queue) > 0:
    current = queue.pop(0)
    if current == dst:
      return True
    for neighbour in graph[current]:
      queue.append(neighbour)
  return False


#dfs 
def has_path(graph, src, dst):
  if src == dst:
    return True
  
  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst) == True:
      return True
    
  return False
    
 
    
        
      