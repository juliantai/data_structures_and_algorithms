// find all triplets that sum up to 0

var triplets = [];

var arr2 = []

function generateNumbers(length){
  var arr = [];
  var low = Math.floor(length / 2);
  for(var i = low * -1, j = 0; i < length; i++, j++) {
    arr[j] = i;
  }
  return arr;
}

function threeSumProblem(num) {
  var arr = generateNumbers(num);

  var results = [];
  if(arr.length < 3)
    return arr;


  for(var i = 0; i < arr.length - 2; i++) {
    if (i == 0 || arr[i] > arr[i - 1]) {
      var end = arr.length - 1;
      var start = 1;

      while(start < end) {

        if(arr[start] + arr[end] + arr[i] === 0) {
          results.push([arr[i], arr[start], arr[end]])
          start++;
          end--;


          while(start < end && arr[start] === arr[start - 1]) start++;

          while(start < end && arr[end] === arr[end - 1]) end--;

        } else if(arr[start] + arr[end] > arr[i]) {
          end--;
        } else {
          start++;
        }

      }

    }
  }

  return results;
}


console.log(threeSumProblem(10));
