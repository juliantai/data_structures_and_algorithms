//http://www.geeksforgeeks.org/nuts-bolts-problem-lock-key-problem/
// change this to make sure that you cannot compare elements within the same array
//bolts can only be compared to nuts, vice versa
var nuts = ["N3", "N2", "N9", "N1", "N4", "N7"]
var bolts = ["B3", "B2", "B9", "B1", "B4", "B7"];



//pivot x
//partition
  //move towards the pivot on both ends
  //make sure the ends pass each other
function qSort(arr, left, right){
  if(arr.length > 1) {

    var length = left + right; // 0 + 4 - 1 = 3
    var pivotIndex = Math.floor(length / 2); // 1
    var pivot = arr[pivotIndex]; // 1


    index = partition(arr, left, right, pivot);
    console.log(index)
    console.log(right)
    if(left < index - 1) qSort(arr, left, index - 1);
    if(right > index) qSort(arr, index, right);
  }

}

function p2(arr, lo, hi) {
  var pivot = arr[lo];
  var i = lo - 1;
  var j = hi + 1;

  while(true) {
    do {
      i += 1;
    } while(arr[i] < pivot)

    do {
      j -= 1
    } while(arr[j] > pivot)

    if(i >= j)
      return j

    swap(arr, i, j);
  }
}
function partition(arr, left, right, pivot) {
  var i = left;
  var j = right;


  while(i <= j) {
    while(arr[i] < pivot) i++;

    while(arr[j] > pivot) j--;



    if(i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }

  }
  return i;

}


function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function displayResult(input, inputTwo) {
  for(var i = 0; i < input.length; i++) {
    console.log(input[i] + "" + inputTwo[i])
  }
}


qSort(nuts, 0, nuts.length - 1);
qSort(bolts, 0, bolts.length - 1);
displayResult(nuts, bolts);


