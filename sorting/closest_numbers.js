var len = 11;
var inputValues = [
  -20,
  -3916237,
  -357920,
  -3620601,
  7374819,
  -7330761,
  30,
  6246457,
  -6461594,
  266854,
  80
]
var minDifference = null;
var minDifferenceTwo = null;

function closestNumbers(length, values) {

  partition(values, 0, length - 1);
  console.log(minDifference)
  console.log(minDifferenceTwo)

}

function partition(arr, first, last) {
  var pi = Math.floor((first + last) / 2);
  var pivot = arr[pi];

  var i = first;
  var j = last;


  while(i <= j) {
    while(arr[i] < pivot) {
      storeIfSmaller(arr, i, pivot);
      i++;
    }

    while(arr[j] > pivot) {
      storeIfSmaller(arr, j, pivot);
      j--;
    }


    if(i <= j) {
      swap(arr, i, j)
      i++;
      j--;
    }

  }

  if(first < j)
    partition(arr, first, j)

  if(last > i)
    partition(arr, i, last)

  // console.log(minDifference);
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function storeIfSmaller(arr, x, pivot) {
  if(!minDifference)
    minDifference = [arr[x], pivot];

  var value = Math.abs(arr[x] - pivot)
  var difference = Math.abs(minDifference[0] - minDifference[1]);

  if(value < difference){
    minDifference = [arr[x], pivot];
    minDifferenceTwo = null;
  }

  if(value === difference) {
    minDifferenceTwo = [arr[x], pivot];
  }

}




// console.log(closestNumbers(-1, [1,2,3]) === -1)
closestNumbers(len, inputValues)
