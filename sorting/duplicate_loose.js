// move them into index + 1
// set number at index to be negative

var arr = generateNumbers(10);

arr = arr.concat(10);

function generateNumbers(length){
  var arr = [];
  for(var i = length; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}

function duplicateNumbers(arr) {
  for(var i = 0; i < arr.length; i++) {

    if(arr[i] === arr[arr[i] - 1] && i != arr[i] - 1) {
      return arr[i]
    }

    while(arr[i] !== arr[arr[i] - 1])
      swap(arr, i, arr[i] - 1)

  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


console.log(duplicateNumbers(arr))




