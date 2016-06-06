

function stringInterleave(s, s1, s2) {
  console.log(s, s1, s2)
  if(s.length < 1 && s1.length < 1 && s2.length < 1) {
    return true;
  }

  var l;
  var r;

  if(s1[0] && s1[0] === s[0])
    l = stringInterleave(s1.slice(1), s2, s.slice(1))

  if(s2[0] && s2[0] === s[0])
    r = stringInterleave(s1, s2.slice(1), s.slice(1))

  if(l || r)
    return true;

  return false;

}

// console.log(stringInterleave("112233", "123", "123"))

function buildGrid(s1, s2) {
  var arr = [];
  for(var i = 0; i <= s1.length; i++) {
    arr.push(new Array(s2.length + 1))
  }
  return arr;
}

function stringInterleave2(s, s1, s2) {
  var m = buildGrid(s1, s2);

  for(var i = 0; i <= s1.length; i++) {
    for(var j = 0; j <= s2.length; j++) {
      if(i === 0 && j === 0)
        m[i][j] = true;
      else if(i === 0 && s2[j - 1] === s[i + j - 1]) {
        m[i][j] = m[i][j - 1];
      }
      else if(j === 0 && s2[i - 1] === s[i + j - 1])
        m[i][j] = m[i - 1][j];
      else if(s1[i - 1] === s[i + j - 1] && s2[j - 1] === s[i + j - 1]) {
        m[i][j] = m[i - 1][j] || m[i][j - 1];
      }
      else if(s2[j - 1] === s[i + j - 1]) {
        m[i][j] = m[i][j - 1];
      }

      else if(s1[i - 1] === s[i + j - 1]) {
        m[i][j] = m[i - 1][j]
      }


    }
  }
  return m[s1.length][s2.length]
}

console.log(stringInterleave2("1212", "12", "12"))
