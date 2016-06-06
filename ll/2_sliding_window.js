var arr = [1,3,-1,-3,5,3,6,7];

function slidingMax(arr, w) {
  var q = [];
  var max = [];

  for(var i = 0; i < w; i++) {
    while(arr[i] > arr[q[0]]) {
      q.shift();
    }
    q.push(i);
  }

  max.push(q[0]);


  for(var i = w; i < arr.length; i++) {

    while(q[0] < i - w) {
      q.shift();
    }

    while(arr[i] > arr[q[0]]) {
      q.shift();
    }

    q.push(i);

    if(q[0] >= i - w) {
      max.push(q[0])
    }
  }

  for(var i = 0; i < max.length; i++) {
    max[i] = arr[max[i]];
  }

  return max;
}

console.log(slidingMax(arr, 3))
