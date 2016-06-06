printSnakeString(4, "Google Worked")
function printSnakeString(kHeight, string) {
  var levels = [];

  for(var i = 0; i < kHeight; i++)
    levels[i] = [];


  var currK = kHeight - 1;
  var desc = true;

  for(var i = 0; i < string.length; i++) {
    var s = string[i];
    if(s === " ")
      s = "~";


    if(currK === 0 || currK === kHeight - 1) {
      if(desc)
        desc = false;
      else
        desc = true;
    }

    levels[currK][i] = s;

    if(desc)
        currK++;
      else
        currK--;


  }
  return levels;
  // for(var i = 0; i < levels.length; i++)
  //   for(var j = 0; j < levels[i].length; j++)
  //     levels[i][j] = levels[i][j] ? levels[i][j] : "_"

  // for(var i = 0; i < levels.length; i++)
  //   console.log(levels[i].join(""))
}

function stringWithSpaces(string, k) {
  if(string === " ")
    string = "~";

  var s = string;
  while(k) {
    s += " ";
    k--;
  }
  return s;
}


function spaces(n) {
  var s = "";
  while(n) {
    s += " "
    n--;
  }
  return s;
}
