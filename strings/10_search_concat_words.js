var t = "dogthecatcatthedog";

var a = ["the", "cat"];
var k = 3



console.log(concatify(t, a, k));

function concatify(t, a, k) {
  var h = hashify(a);
  var h2 = blankHashify(a);
  var res = [];

  var i = 0;
  var j = 0;

  while(j < t.length) {

    var c = t.slice(j, j + k);
    if(h[c]) {
      h2[c]++;

      var f = found(h, h2);

      if(f[0]) {
        var diff = f[1];

        do {
          var validChar = t.slice(i, i + k);
          i += k;
        } while(!validChar);

        while(diff) {
          i += k;
          diff--;
        }

        res.push(i);
        h2[c]--;
        i += k;
      }
      j += k;
    } else {
      h2 = blankHashify(a);
      i = j;
      j += k;
    }
  }
  return res;
}

function found(h, h2) {
  var k = Object.keys(h);
  var difference = 0;
  for(var i = 0; i < k.length; i++) {
    var word = k[i];
    if(h[word] > h2[word]) {
      return [false, null];
    }
    difference += h2[word] - h[word];
  }

  return [true, difference];
}

function blankHashify(a) {
  var i = 0;
  var h = {};
  while(i < a.length) {
    var c = a[i];
    h[c] = 0;
    i++
  }
  return h;
}

function hashify(a) {
  var i = 0;
  var h = {};
  while(i < a.length) {
    var c = a[i];
    if(!h[c])
      h[c] = 1
    else
      h[c]++
    i++
  }
  return h;
}
