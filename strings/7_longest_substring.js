var t = "ecececeba";


function longestDistinct(str, kDistChars) {
  var k = kDistChars;
  var lastNewChar = str[0];
  var longestValid = null;
  var charLength = 1;
  var charPos = {};
  charPos[lastNewChar] = [0];

  this.compute = function() {
    var i = 0;
    var j = 1;

    while(j < str.length) {
      var c = str[j];

      if(!charPos[c]) {
        charPos[c] = [j];
        charLength++;
      } else {
        charPos[c].push(j);
      }


      if (charLength > kDistChars){
        this.updateLongestValid(i, j);
        i = this.evict();
        charLength--;
      }

      j++;

    }
    return str.slice(longestValid[0], longestValid[1]);

  }

  this.updateLongestValid = function(i, j) {
    if(!longestValid){
      longestValid = [i, j];
    } else {

      var currentLen = longestValid[1] - longestValid[0];
      if(currentLen < j - i) {
        longestValid = [i, j];
      }
    }
  }

  this.evict = function() {
    var k = Object.keys(charPos);
    var min = null;

    var minC;
    for(var d = 0; d < k.length; d++) {
      var c = k[d];
      var pos = charPos[c]
      if(!min || min > pos[pos.length - 1]) {
        minC = c;

        min = pos[pos.length - 1];

      }
    }

    delete charPos[minC];

    return min;
  }





}

var ld = new longestDistinct(t, 2);
console.log(ld.compute())
