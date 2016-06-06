var arr = [2,3,5,1,4];
var cache = cacheBuilder(arr);

function cacheBuilder(arr) {
  var c = [];
  for(var i = 0; i < arr.length; i++) {
    if(!c[i])
      c[i] = [];

    for(var j = 0; j < arr.length; j++) {
      c[i][j] = -1;

     }
  }
  return c
}

function wineAdd(arr, i, j) {

  if(i > j)
    return 0;

  if(cache[i][j] !== -1) {
    return cache[i][j]
  }
  // 1 + 4 + 5 - 1
  console.log(cache)
  var year = arr.length - (j - i + 1) + 1;

  var l = arr[i] * year + wineAdd(arr, i + 1, j)
  var r = arr[j] * year + wineAdd(arr, i, j - 1)

  cache[i][j] = Math.max(l, r);

  return cache[i][j]
}

console.log(wineAdd(arr, 0, arr.length - 1))
console.log(cache)
