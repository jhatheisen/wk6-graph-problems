function getNeighbors(row, col, graph) {
  let neighbors = [];
  // if not on edge
  // Check top
  if (row - 1 > -1) {
    if (graph[row - 1][col]) neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row + 1 < graph.length) {
    if (graph[row + 1][col]) neighbors.push([row + 1, col]);
  }
  // Check left
  if (col - 1 > -1) {
    if (graph[row][col - 1]) neighbors.push([row, col - 1]);
  }
  // Check right
  if (col + 1 < graph[row].length) {
    if (graph[row][col + 1]) neighbors.push([row, col + 1]);
  }
  // Return neighbors
  return neighbors;
}
//row,col 0 1 2 3 4
// 0     [1,1,1,0,0],
// 1     [0,1,1,0,1],
// 2     [0,1,1,0,1]

function islandSize(row, col, graph) {
  let startNode = [row, col];
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [startNode];
  // Put the stringified starting node in visited
  visited.add(startNode.toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let currNode = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // get neighbors
    let neighbors = getNeighbors(currNode[0], currNode[1], graph);
    // iterate through each neighbor
    neighbors.forEach(neighbor => {
      // if not visited
      if (!visited.has(neighbor.toString())) {
        // Then push all the UNVISITED neighbors on top of the stack
        stack.push(neighbor);
        // and mark them as visited
        visited.add(neighbor.toString());
      }
    });
  }
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size
  return size;
}

module.exports = [getNeighbors, islandSize];
