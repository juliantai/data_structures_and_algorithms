var words = ["baa", "abcd", "abca", "cab", "cad"];
var words2 = ["caa", "aaa", "aab"];

function topologicalSort(words) {
  var visited = {};
  var output = [];

  for(var i = 0; i < words.length; i++) {
    for(var j = 0; j < words[i].length; j++) {
      var v = words[i][j];
      if(!visited[v]) {
        visited[v] = true;
        output.push(words[i][j]);
      }
    }
  }
  return output
}



console.log(topologicalSort(words))
console.log(topologicalSort(words2))
