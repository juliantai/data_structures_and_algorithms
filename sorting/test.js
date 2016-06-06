function isPalindrome(strInput) {
    var i = 0
    var j = strInput.length - 1;

    return compareNext(strInput, i, j);



}

function compareNext(strInput, i, j) {
    if(i === j || i + 1 > j) return true;

    var half = Math.floor(strInput.length / 2);
    if(half <= j && half >= i) {

      while(i <= half && isPunctuation(strInput[i])) i++;
      while(j >= half && isPunctuation(strInput[j])) j--;
      if(strInput[i] === strInput[j]) {
          return compareNext(strInput, i + 1, j - 1);
      }
    }
    return false;
}

function isPunctuation(c) {
    return (c === "." || c === "," || c === "!" || c === "-" || c === ";" || c === ":" || c === "\\" || c === "\"" || c === " ");
}

console.log(isPalindrome("teddedet"));
