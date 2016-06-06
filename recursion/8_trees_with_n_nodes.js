function countTrees(nLevels) {

  if(nLevels <= 1)
    return 1;

  var sum = 0;
  var left;
  var right;


  for(var rootItem = 1; rootItem <= nLevels; rootItem++) {

    left = countTrees(rootItem - 1);
    right = countTrees(nLevels - rootItem);
    // console.log(nLevels, rootItem)
    // if(right === 2 || left === 2) {
    //   console.log(nLevels, rootItem)
    //   console.log("_____")
    // }
    console.log(sum)
    sum += left * right;
    console.log(left, right, sum)
    console.log("_____")

  }

  return sum;

}

console.log(countTrees(3))

// https://en.wikipedia.org/wiki/Catalan_number
