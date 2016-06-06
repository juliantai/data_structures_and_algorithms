var values = [];
function wildcard(str, index) {
  if(str.length === index) {
    values.push(str)
    return;
  }

  var newStr;
  if(str[index] === "?") {
    newStr = str.slice(0, index) + "0" + str.slice(index + 1, str.length)
    wildcard(newStr, index + 1);
    newStr = str.slice(0, index) + "1" + str.slice(index + 1, str.length)
    wildcard(newStr, index + 1);
  } else {
    wildcard(str, index + 1);
  }


}

wildcard("1?1?", 0);

console.log(values)
