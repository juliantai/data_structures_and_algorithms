var s = "AYBZABOBECODXBANC";
var t = "ABC";

function findString(s, t) {
  var prev = "";
  var s = s;
  var t = t;
  var tH = {};
  var tPos = {};

  this.hashify = function() {
    for(var i = 0; i < t.length; i++) {
      var c = t[i]
      if(!tH[c]) {
        tH[c] = 1
        tPos[c] = [];
      } else {
        tH[c]++;
      }
    }
  }

  this.trimStr = function() {
    var k = Object.keys(tPos);
    var min = 0;
    for(var i = 0; i < k.length; i++) {
      var j = 0;
      var c = k[i];
      var sliceAt = tPos[c].length - tH[c];
      tPos[c] = tPos[c].slice(sliceAt);
      if(min < tPos[c][0])
        min = tPos[c][0]
    }
    return min;

  }

  this.buildString = function() {
    var k = Object.keys(tPos);
    var arr = [];
    for(var i = 0; i < k.length; i++) {
      var c = k[i];
      arr = arr.concat(tPos[c]);
    }
    return s.slice(Math.min.apply(null, arr), Math.max.apply(null, arr) + 2);
  }

  this.locate = function() {
    var i = 0;
    var j = 1;


    while(j < s.length) {
      var c = s[j]
      if(tPos[c]) {
        tPos[c].push(j);
      }
      i = this.trimStr();
      j++;
    }

    return this.buildString();
  }



  this.hashify();
}

var fs = new findString(s, t);
console.log(fs.locate())
