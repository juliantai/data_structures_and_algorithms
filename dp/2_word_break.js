var arr = ["apple", "pie", "app", "lepie"];


function find(arr, str, a, p) {
  if(str.length === 0) {
    p.push(a)
  }

  for(var i = 0; i < arr.length; i++) {
    var len = arr[i].length;
    var temp = str.slice(0, len);
    if(temp === arr[i]) {
      a.push(temp)
      find(arr, str.slice(len), a.slice(), p);
      a.pop();
    }
  }
  return p;
}



function stringify(arrOfStrArrs) {
  for(var i = 0; i < arrOfStrArrs.length; i++) {
    console.log(arrOfStrArrs[i].join(" "))
  }
}


stringify(find(arr, "applepie", [], []));
