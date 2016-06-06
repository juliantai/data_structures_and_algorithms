// find int not found
// should be 32 bit

// find missing number within permutation of 1 million

var arr = null;
var incompleteIndex = null;
var result = null;

function maxArraySizeBasedOnNum(num) {
  num = Math.sqrt(num)
  var power = 1
  var bit = 2
  while(Math.pow(bit, power) < num) {
    power++
  }
  return [power, Math.pow(bit, power)];
}

function createBucketFromInts(num) {
  var values = maxArraySizeBasedOnNum(num);
  var power = values[0];
  var bucket = values[1];
  var arr = [];
  for(var i = 0; i < num; i++) {
    if(!arr[parseInt(i / 1024)]) {
      arr[parseInt(i / bucket)] = 0;
    }
    arr[parseInt(i / bucket)]++;
  }
  return arr;
}

function findIncompleteBucket(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 1024) {
      return i;
    }
  }
}

function findMissingNumber(arr, index) {
  var resultsArr = [];

  for(var i = 0; i < 1000001; i++) {
    if(i >= index * 1024 && i < ((index + 1) * 1024)) {
      var value = i % 1024;
      // console.log(value)
      if(!resultsArr[value])
        resultsArr[value] = 0;

      resultsArr[value]++;
    }
  }


  var resultIndex = null;
  for(var i = 0; i < resultsArr.length; i++) {
    if(!resultsArr[i] || resultsArr[i] === 0) {
      resultIndex = i;
      return resultIndex * 1024;
    }
  }

  return 1024 * index + resultsArr.length ;
}


arr = createBucketFromInts(1000000);
incompleteIndex = findIncompleteBucket(arr);
result = findMissingNumber(arr, incompleteIndex);
console.log(result)

console.log(maxArraySizeBasedOnNum(1000000))
