// Omg this took me 30 minutes

function atoi(string) {

  if(!string) return 0;

  var sign = 1;
  var signed = false;
  var s = 0;
  for(var i = 0; i < string.length; i++) {

    if(validSign(string[i])) {

      if(signed) {
        return 0;
      }
      sign = sign * (string[i] + "1");
      signed = true;
    } else if(validLetter(string[i])) {
      if(s.length) {
        return 0;
      }
      return s * sign;
    } else if(invalidChar(string[i])) {
      continue;
    } else if(validInput(string[i])) {
      if(s > 0)
        s = s * 10 + parseInt(string[i]);
      else
        s = parseInt(string[i]);
      if(string[i] > Number.MAX_VALUE)
        return "MAX";

      if(string[i] < Number.MIN_VALUE)
        return "MIN";
    }
  }

  return s * sign;
}

function invalidChar(c) {
  return c === " ";
}
function validLetter(c) {
  return c >= "A" && c <= "z";
}
function validSign(c) {
  // console.log(c === "-")
  return c === "-" || c === "+";
}
function validInput(string) {
  return string >= "0" && string <= "9"
}

console.log(atoi("-3924x8fc"));
console.log(atoi(" + 413"));
console.log(atoi("c++"));
console.log(atoi("++1"));
