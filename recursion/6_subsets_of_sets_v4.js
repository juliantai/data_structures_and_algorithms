subset([1,2,3], 0, [])
function subset(arr, start, curr) {
  console.log(curr);
  for(var i = start; i < arr.length; i++) {
    var digit = arr[i];
    curr.push(digit);
    subset(arr, i + 1, curr);
    curr.pop();
  }
}
