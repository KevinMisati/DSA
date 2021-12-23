def largest_component(graph):
  largest = 0
  for node in graph:
    size = exploreSize(graph,node,set())
    if size > largest:
      largest = size
  return largest

def exploreSize(graph,node,visited):
  if node in visited:
    return 0
  visited.add(node)
  size = 1
  for neigh in graph[node]:
    size +=exploreSize(graph,neigh,visited)
  return size