function maxProductFromCutPieces(iRopeLength, arr) {

  for(var i = 1; i < iRopeLength; i++) {
    arr.push(i);
    console.log(arr)
    maxProductFromCutPieces(iRopeLength - i, arr)
    arr.pop();
  }
  console.log(arr)
}
maxProductFromCutPieces(10, [])


function adder(x, y, callback) {
  var result = x + y;
  return callback(result);
}



