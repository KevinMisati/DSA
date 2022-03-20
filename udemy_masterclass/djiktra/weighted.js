class WeightedGraph{
    constructor(){
        this.adjacencyList = {}

    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    adddge(v1,v2,weight){
        this.adjacencyList[v1].push({node:v2,weight})
        this.adjacencyList[v2].push({node:v1,weight})
    }
}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.adddge("A","B",9)
graph.adddge("A","C",5)
graph.adddge("B","C",15)

console.log(graph)