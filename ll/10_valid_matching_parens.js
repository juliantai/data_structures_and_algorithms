console.log(hasMatchingParantheses("()"))
console.log(hasMatchingParantheses("[()]"))
console.log(hasMatchingParantheses("{a*b[()]}"))
console.log(hasMatchingParantheses("}["))
console.log(hasMatchingParantheses("[}"))
console.log(hasMatchingParantheses("[}]"))

function hasMatchingParantheses(strExpression) {
  if(!strExpression) return false;

  var stack = [];

  for(var i = 0; i < strExpression.length; i++) {
    if(parens(strExpression[i])) {
      if(validOpen(strExpression[i])) {
        stack.push(strExpression[i]);
      } else if(validClose(strExpression[i]) && matchingClose(stack, strExpression[i])) {
        stack.pop();
      } else {
        break;
      }
    }
  }
  if(stack.length < 1) return true;

  return false;


}

function matchingClose(arr, str) {
  if(peek(arr) === "{" && str === "}")
    return true;
  else if(peek(arr) === "[" && str === "]")
    return true
  else if(peek(arr) === "(" && str === ")")
    return true;

  return false;
}
function peek(arr) {
  var val = arr.pop();
  if(val)
    arr.push(val);

  return val;
}

function validClose(str) {
  return ["]", "}", ")"].indexOf(str) > -1
}
function validOpen(str) {
  return ["(", "[", "}"].indexOf(str) > -1;
}

function parens(str) {
  return ["(", ")", "{", "}", "[", "]"].indexOf(str) > -1;
}
