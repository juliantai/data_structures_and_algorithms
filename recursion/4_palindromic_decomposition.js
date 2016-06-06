var input = "abracadabra";
var input2 = "aab";
var palindromes = [];
var parts = [];

function palindromicDecomposition(str, start, parts, result) {
  if(str.length === start) {
    console.log(str.length, start)
    palindromes.push(parts);
    return;
  }

  for(var i = start + 1; i <= str.length; i++) {
    var temp = str.slice(start, i);
    console.log(start, i)
    console.log(temp)
    // a
    // aa
    // aab
    if(isPalindrome(temp)) {
      parts.push(temp);
      // [a]
      // [aa]
      // console.log(i)
      palindromicDecomposition(str, i, parts, result);
      // aab, {1,2}, {[a], [aa]}, []
        // aab, 1, [a], []
        // aab, 2, [a, a], []
          //result [a, a, b]



      parts = parts.slice(parts.length);
      // emptys parts for reuse

    }
  }
}

palindromicDecomposition(input, 0, parts, palindromes);
console.log(palindromes);


function nonpalindromicDecomposition(str) {

  // begining and end string subtraction

  // "abcbr"


  // subtract off the back
  // "abcb"
    // subtract off the back
    // "abc"
    // "ab"
    // "a"

    // subtract off the front, after subtracting off the back
    // "bcb"
    // "cb"
    // "b"

  // "bcbr"
  // "cbr"
  // "br"
  // "r"
  if(str.length === 0)
    return;

  if(isPalindrome(str) && palindromes.indexOf(str) < 0) {
    palindromes.push(str);
  }
  var cutBackString = str.slice(0, -1);
  nonPartition(cutBackString);

  var cutFrontString = str.slice(1);
  nonPartition(cutFrontString);


}

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

isPalindrome("dad") === true
isPalindrome("dadad") === true
isPalindrome("dadtad") === false

// nonPartition(input)
// palindromes
