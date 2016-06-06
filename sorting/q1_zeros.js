var arr = [
  [0,1, 1],
  [1, 1,0],
  [1, 1,1]
];


makeZero(arr)
function makeZero(arr) {
  var r = {};
  var c = {};

  for(var y = 0; y < arr.length; y++) {

    for(var x = 0; x < arr[0].length; x++) {
      if(!arr[y][x]) {
        r[x] = true;
        c[y] = true;
      }
    }
  }


  for(var y = 0; y < arr.length; y++) {

    for(var x = 0; x < arr[0].length; x++) {

      if(r[x] || c[y]) {
        console.log(y,x, arr[y][x])
        arr[y][x] = 0;
      }

    }
  }



  console.log(arr)
}
