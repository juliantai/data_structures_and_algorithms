//http://elementsofprogramminginterviews.com/static/java/src/main/java/com/epi/AddOperatorsInString.java

expressionEvaluator()
function expressionEvaluator() {
  expressionCreator("222", "24", ["", "*", "+"], 0)
}
function expressionCreator(strDigits, iK, expressions, index) {
  // if(strDigits.length > 3) return;
  if(strDigits === parseInt(iK)) {
    console.log(strDigits)
    return;
  }

  // if(index < strDigits.length) {}

  for(var i = 0; i < expressions.length; i++) {
    //copy arr
    var tempExp = expressions.slice();
    tempExp.splice(i,1);
    var value = eval(strDigits[index] + expressions[i] + strDigits[index + 1]);
    console.log(value + strDigits.slice(index + 2))
    console.log(tempExp)
    // expressionCreator(value, iK, expressions);
  }


}

// ???? wtf is this question saying
