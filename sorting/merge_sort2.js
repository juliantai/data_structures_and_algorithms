var arr = generateNumbers(10);

function generateNumbers(length){
  var arr = [];
  for(var i = length; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}



// step 1 implement the merge function


function merge(larr, rarr) {
  var arr = [];
  var i = 0;
  var j = 0;

  while(i < larr.length && j < rarr.length) {

    if(larr[i] < rarr[j]) {
      arr.push(larr[i]);
      i++;
    } else {
      arr.push(rarr[j])
      j++;
    }
  }

  while(i < larr.length) {
    arr.push(larr[i]);
    i++
  }

  while(j < rarr.length) {
    arr.push(rarr[j]);
    j++
  }
  return arr;


}


console.log(mergeSort([3,4,2,5]))


// step two is the merge sort

function mergeSort(arr) {

  if(arr.length < 2) {
    return arr;
  }
  var pivot = Math.floor(arr.length / 2);
  var left = [];
  var right = [];

  for(var i = 0; i < arr.length; i++) {
    if(i < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return merge(mergeSort(left), mergeSort(right));

}
