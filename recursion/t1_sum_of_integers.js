
function groupSum(IntArr, iTarget) {

  var hasSum = false;
  for(var i = 0; i < IntArr.length; i++) {
    hasSum = _groupSum(IntArr, iTarget, i, 0)

    // console.log(IntArr)
    if(hasSum) return true;
  }

  return false;

}

// can do it another way with just two _groupSum()
// subtract the target until 0

function _groupSum(IntArr, iTarget, index, sum) {
  if(sum === iTarget)
    return true;

  if(IntArr.length === index) {
    return false;
  }

  sum += IntArr[index];
  return _groupSum(IntArr, iTarget, index + 1, sum);

}

console.log(groupSum([2, 8, 6], 6) === true)
console.log(groupSum([2, 4, 8], 6) === true)
console.log(groupSum([2, -4, 8], 1) === false)
console.log(groupSum([2, 4, 8], 14) === true)
console.log(groupSum([2, 4, 8], 9) === false)

