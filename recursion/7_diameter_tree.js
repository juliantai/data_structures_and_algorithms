var Node = function(weight, children) {
  this.weight = weight || 0;
  this.children = children;
}

var l3 = [new Node(8), new Node(9)];
var l2 = [new Node(5, l3), new Node(10)];
var l1 = new Node(null, l2);

console.log(l1.children)

// get the max of l3 and pass to l2, pass the diameter too
// get max of l2 pass to l1, pass the diameter too


function diameterOfTree(rootItem, sum, diameter) {


  for(var i = 0; i < rootItem.length; i++) {
    if(rootItem[i].children && rootItem[i].children.length > 0){
      // console.log(rootItem[i])
      diameterOfTree(rootItem[i].children, sum, diameter)
      // console.log(fetchMax(rootItem[i]))
      // sum += fetchMax(rootItem[i]);
      // console.log(sum)

      // console.log(sum)
      diameter = fetchDiameter(rootItem[i]);
      console.log(diameter)
    }

  }

  return sum;

}

function fetchMax(rootItem) {
  if(rootItem.children < 1) return null;
  var max = null;
  for(var i = 0; i < rootItem.children.length; i++) {
    if(!max) {
      max = rootItem.children[i].weight;
    } else if(max < rootItem.children[i].weight) {
      max = rootItem.children[i].weight;
    }
  }
  return max;
}

function fetchDiameter(rootItem) {
  if(rootItem.children < 2) return null;
  var max = rootItem.children[0].weight;
  var maxTwo = rootItem.children[1].weight;

  if(maxTwo > max) {
    var temp = max;
    max = maxTwo;
    maxTwo = temp;
  }

  for(var i = 2; i < rootItem.children.length; i++) {

    if(max < rootItem.children[i].weight) {
      var temp = max;
      max = rootItem.children[i].weight;
      maxTwo = temp;

    }
  }
  return maxTwo + max;
}

console.log(diameterOfTree([l1]), 0, 0)
