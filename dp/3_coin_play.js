var arr = [8, 15, 3, 7, 10, 100];
function coin(arr) {
  if(arr.length % 2 !== 0)
    return;

  var fsum = arr[0];
  var bsum = arr[arr.length - 1];

  fsum = toss(arr.slice(1), fsum, false);

  bsum = toss(arr.slice(0, -1), bsum, false);

  return Math.max(fsum, bsum)
}

function toss(arr, sum, turn) {
  if(arr.length === 1)
    return sum;

  var f = arr[0];
  var b = arr[arr.length - 1];

  if(f > b) {
    if(turn)
      sum += f
    arr.shift();
  }

  if(f < b) {
    if(turn)
      sum += b
    arr.pop();
  }



  return toss(arr, sum, turn ? false : true)

}

console.log(coin(arr))

// this is a solution, but cannot handle equality
