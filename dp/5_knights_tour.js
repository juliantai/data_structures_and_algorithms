arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [-1,0,-1]
];



function possibleMoves() {
  var arr = [];
  var coords = [2, -2];
  var coords2 = [1,-1];
  for(var i = 0; i < coords.length; i++) {
    for(var j = 0; j < coords2.length; j++) {
      arr.push([coords[i], coords2[j]])
      arr.push([coords2[j], coords[i]])
    }
  }
  return arr;
}

function validMoves(arr, i, j) {
  var moves = possibleMoves();
  var moveArr = [];

  for(var k = 0; k < moves.length; k++) {
    var y = moves[k][0] + i;
    var x = moves[k][1] + j;

    if(y < 0 || x < 0)
      continue;

    if(y > arr.length - 1 || x > arr[0].length - 1)
      continue;

    if(arr[y][x] === -1)
      continue;

    moveArr.push([y, x]);

  }
  return moveArr;
}

function generatePossible(arr, startY, startX, posComb, total, digits) {
  var num = arr[startY][startX];

  if(!num)
    return;

  if(num === -1)
    return 1;
  console.log(total)
  if(digits < 1) {
    return total;
  }
  console.log(posComb)
  if(!posComb[num])
    posComb[num] = validMoves(arr, startY, startX);

  for(var i = 0; i < posComb[num].length; i++) {
    var y = posComb[num][i][0];
    var x = posComb[num][i][1];
    generatePossible(arr, y, x, posComb, total * posComb[num].length,  digits - 1)
  }

  // return total;

}

console.log(generatePossible(arr, 0, 0, {}, 1, 10))
