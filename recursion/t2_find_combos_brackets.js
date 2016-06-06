function WellFormedBrackets() {
  return _WellFormedBrackets(2, 0);
}

function _WellFormedBrackets(n, index) {
  if(n === index)
    return;







}



function bracketeer(str, start, n) {
  console.log(start, n)
  if(start === n) {
    console.log(str)
    return;
  }


  if(str === "")
    str = "()";

  bracketeer("(" + str + ")", start + 1, n)
  bracketeer(str + "()", start + 1, n)

  if(n > 2)
    bracketeer("()" + str, start + 1, n)
}


bracketeer("", 1, 3);
// WellFormedBrackets();
