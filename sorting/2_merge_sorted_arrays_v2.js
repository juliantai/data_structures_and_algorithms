var arr = [1,3,5,7];
var arr2 = [2,4,6,8,,,,,];

// [,]
// [1,2,3,4,]
function mergeFirstIntoAnother(intArrShort, intArrLong) {
  var currentLoc = arr2.length - 1
  var i = arr.length - 1;
  var j = Math.floor((arr2.length - 1) / 2);
  // console.log(i, j)
  while(i > -1 || j > -1) {



    if(arr[i] > arr2[j]) {

      arr2[currentLoc] = arr[i];
      i--;
    } else {
      arr2[currentLoc] = arr2[j];
      j--;
    }



    currentLoc--;
    console.log("loc" + currentLoc)


  }
  console.log(arr)
  console.log(arr2)


}

mergeFirstIntoAnother(arr, arr2);
