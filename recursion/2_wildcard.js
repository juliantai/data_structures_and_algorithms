
function wildcard(str, index) {
  if(str.length === index) {
    console.log(str);
    return;
  }
  if(str[index] === "?") {
    str = str.slice(0, index) + "0" + str.slice(index + 1, str.length)
    wildcard(str, index + 1);

    str = str.slice(0, index) + "1" + str.slice(index + 1, str.length)
    wildcard(str, index + 1);
  } else {
    wildcard(str, index + 1);
  }
}

wildcard("1?1?", 0)
