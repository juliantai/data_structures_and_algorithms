function howManyTrees(nodes) {
  if(nodes <= 1)
    return 1;


  var sum = 0;
  for(var i = 1; i <= nodes; i++) {

    var left = howManyTrees(i - 1);
    var right = howManyTrees(nodes - i);
    console.log(left, right)
    sum += left * right;
  }
  return sum;

}


console.log(howManyTrees(4))
