var nuts = [3, 2, 1, 4];
var bolts = [4, 2, 3, 1];

var nuts = [3, 2, 1, 4,5,8,6,7];
var bolts = [4, 2, 3, 1,7,8,6,5];


function matchPairs(nuts, bolts, start, end) {
  console.log(start)
  console.log(end)
  if(start < end) {
    var nutsPivot = (start + end) / 2;
    nutsPivot = Math.floor(nutsPivot);
    var boltPivot = partition(bolts, start, end, nuts[nutsPivot]);
    partition(nuts, start, end, bolts[boltPivot]);
    matchPairs(nuts, bolts, start, boltPivot - 1);
    matchPairs(nuts, bolts, boltPivot + 1, end);
  }


}

function partition(arr, start, end, pivot) {
  i = start;
  j = end;

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



matchPairs(nuts, bolts, 0, bolts.length - 1);
console.log(bolts);
console.log(nuts);
