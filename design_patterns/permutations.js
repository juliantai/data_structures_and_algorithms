var scores = [];
var ratio = {
  0: .5,
  1: .3,
  2: .2
}
var roundPercent = {

}

var arr = [0, 1, 2]
function scoreRound(arr) {
  for(var i = 0; i < arr.length; i++)
    for(var j = 0; j < arr.length; j++)
      scores.push([i, j])

  return scores
}

scoreRound(arr);
console.log(calcRound(scores))
function calcRound(scores) {
  for(var i = 0; i < scores.length; i++) {
    var t = scores[i][0] + scores[i][1];
    if(!roundPercent[t])
      roundPercent[t] = ratio[scores[i][0]] * ratio[scores[i][1]]
    else
      roundPercent[t] += ratio[scores[i][0]] * ratio[scores[i][1]]
  }
  return roundPercent
}

function calcMultipleRounds(rounds, score) {

  // if(rounds < 1)
  //   return 0;

  // var perRound = score / rounds;

  // if(perRound > 4)
  //   return 0;

  // if(perRound === 4 && score % rounds > 0)
  //   return 0;

  for (var key in roundPercent) {
    roundPercent[key] + calcMultipleRounds(rounds - 1, score - key)
  }

}
