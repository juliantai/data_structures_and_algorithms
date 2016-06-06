var preOrder = [1,2,3,5,7,6,4]

function constructTree(inOrder, preOrder) {

  var ioRoot = inOrder[0];
  var poRoot;
  var poLeft
  for(var i = 0; i < preOrder.length; i++) {
    if(ioRoot === preOrder[i])

  }
  constructTree_(inOrder, 0, preOrder, null)

}

function constructTree_(inOrder, ioRoot, preOrder, poRoot) {

}

// hash set
