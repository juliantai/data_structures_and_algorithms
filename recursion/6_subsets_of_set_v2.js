var str = "abcd";

for(var i = 0; i < str.length; i++) {
  subs("", i)
}


function subs(substr, index) {
  var s = str.charAt(index);
  s = substr + s;

  for(var i = index + 1; i < str.length; i++) {
    subs(s, i)
  }
}


var a = [1,2,3,4];

for(var i = 0; i < a.length; i++) {
  subA([], i);
}


function subA(subArr, index) {
  var arr = [a[index]];

  arr = arr.concat(subArr);

  console.log(arr)
  for(var i = index + 1; i < a.length; i++) {
    subA(arr, i);
  }
}
