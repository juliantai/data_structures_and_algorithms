function isPalindrome(str) {
  var i = 0;
  var j = str.length - 1;

  while(i <= j) {
    if(str[i] !== str[j])
      return false;

    i++;
    j--;
  }

  return true;

}

pd("abracadabra", 0, []);

function pd(word, start, curr) {
  if(start === word.length) {
    console.log(curr)
    return;
  }

  for(var i = start + 1; i <= word.length; i++) {
    var currW = word.slice(start, i);
    if(isPalindrome(currW)) {
      curr.push(currW);
      console.log(start, i, currW)
      pd(word, i, curr);
      curr.pop();
    }
  }

}
