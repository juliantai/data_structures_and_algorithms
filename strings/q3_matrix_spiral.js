var list = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

function spiral(list) {
  var minY = 0;
  var minX = 0;
  var maxY = list.length - 1;
  var maxX = list[0].length - 1;

  while(maxY >= minY || maxX >= minX) {
    // console.log(minY, minX, maxY, maxX)

    for(var i = minX; i <= maxX; i++)
      console.log(list[minY][i]);


    minY++;

    for(var i = minY; i <= maxY; i++)
      console.log(list[i][maxX]);

    maxX--;

    for(var i = maxX; i >= minX; i--)
      console.log(list[maxY][i]);

    maxY--;

    for(var i = maxY; i >= minY; i--)
      console.log(list[i][minX]);

    minX++;


  }

}

spiral(list)
