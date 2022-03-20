class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !==v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !==v1)
    }
    removeVertex(v){
        while(this.adjacencyList[v].length){
            const adjacencyVertex = this.adjacencyList[v].pop()
            this.removeEdge(v,adjacencyVertex)
        }
        delete this.adjacencyList[v]
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }

    depthFirstIterative(start){
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex;

        visited[start] = true
        while(stack.length){
            currentVertex =  stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    bfs(start) {
        let queue = [start]
        let visited = {}
        let result = []
        let currentVertex;

        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
//console.log(g.depthFirstRecursive("A"))
//console.log(g.depthFirstIterative("A"))
console.log(g.bfs("A"))
//g.removeEdge("Tokyo","Aspen")
//console.log(g)