function maxLenMatchingParen(strParenExpression) {

  var open = 0;
  var len = 0;
  for(var i = 0; i < strParenExpression.length; i++) {
    if(isOpen(strParenExpression[i])) {
      open++;
    } else if(open > 0) {
      open--;
      len += 2;
    }
  }

  return len;

}

function isOpen(s) {
  return s === "(";
}

console.log(maxLenMatchingParen(")"))
console.log(maxLenMatchingParen("("))
console.log(maxLenMatchingParen("()"))
console.log(maxLenMatchingParen("()()"))
console.log(maxLenMatchingParen("(())"))
console.log(maxLenMatchingParen("((((())((((()"))
