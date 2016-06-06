var str1 = "ABCDGH";
var str2 = "AEDFHR";


function longestCommonSub(s1, s2) {
  var arr = buildAdjList(s1, s2);
  console.log(arr)
  var commonLength = arr[s1.length][s2.length];
  if(!commonLength)
    return "";

  var i = s1.length; //7
  var j = s2.length; //7
  var s = ""

  while(commonLength > 0) {
    if(arr[i - 1][j - 1] === commonLength) {
      i = i - 1;
      j = j - 1;
    } else if(arr[i - 1][j] === commonLength) {
      i = i - 1;
    } else if(arr[i][j - 1] === commonLength) {
      j = j - 1;
    } else {
      commonLength--;
      s = str1[i - 1] + s;
      i = i - 1;
      j = j - 1;
    }
  }
  return s;
}

function buildAdjList(s1, s2) {
  var arr = [];

  for(var i = 0; i <= s1.length; i++) {
    if(!arr[i])
        arr[i] = [];

    for(var j = 0; j <= s2.length; j++) {
      arr[i][j] = 0;
    }
  }

  for(var i = 1; i <= s1.length; i++) {
    for(var j = 1; j <= s2.length; j++) {

      arr[i][j] = Math.max(arr[i][j - 1], arr[i - 1][j])
      if(s1[i - 1] === s2[j - 1]) {
        arr[i][j] = arr[i][j] + 1;
      }
    }
  }

  return arr;
}

