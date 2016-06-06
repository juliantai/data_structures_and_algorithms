var arr = [1,2,3];
var operators = [];
function expressionEvaluator(arr, k) {

  evaluate(arr, k, 0, 0, null, []);

}


function evaluate(arr, k, index, currentK, operator, operators) {
  if(!arr[index] || currentK > k) {
    return;
  }

  if(operator === '')
    currentK = currentK * 10 + arr[index];
  else if(operator === "*")
    currentK = currentK * arr[index];
  else if(operator === "+")
    currentK = currentK + arr[index];

  if(operator === null)
    currentK = arr[0];
  else
    operators.push(operator)

  if(currentK === k) {
    console.log("Valid Operators [" + operators + "]")
    return;
  }
  evaluate(arr, k, index + 1, currentK, "", operators.slice());
  evaluate(arr, k, index + 1, currentK, "*", operators.slice());
  evaluate(arr, k, index + 1, currentK, "+", operators.slice());

}
expressionEvaluator(arr, 6);



function operate(arr, operators) {
  if(arr.length < 1) return 0;
  if(arr.length < 2) return arr[0];
  if(arr.length - 1 !== operators.length) return -1;


  var num = arr[0];
  for(var i = 0; i < operators.length; i++) {
    if(operators[i] === '')
      num = num * 10 + arr[i + 1];
    else if(operators[i] === "*")
      num = num * arr[i + 1];
    else if(operators[i] === "+")
      num = num + arr[i + 1];
    else
      throw -1;

  }
  return num;
}

// console.log(operate([], [""]));
// console.log(operate([1], [""]));
// console.log(operate([1], [""]));
// console.log(operate([1, 2], ["", "*"]));
// console.log(operate([1, 2, 3], ["", "*"]));

