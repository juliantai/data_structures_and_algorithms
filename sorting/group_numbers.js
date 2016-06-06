function generatePositiveNumbers(x) {
  var arr = [];

  for(var i = 0; i < x; i++) {
    arr[i] = i + 1;
  }

  return arr;

}


function groupEvensOdds(arr) {
   var halfLength = Math.floor(arr.length / 2);


   var j = arr.length - 1;

   //ignore center element because doesnt matter;
  for(var i = 0; i < halfLength; i++) {

    while(arr[i] % 2 === 0) {
      i++;
    }

    while(arr[j] % 2 === 1) {
      j--;
    }

    swap(arr, i, j)


  }

  console.log(arr)
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

groupEvensOdds(generatePositiveNumbers(10));
