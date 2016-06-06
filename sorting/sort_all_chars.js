var str = "Hello how are you.\n";

function sortAllChars(str){
  var arr = new Array(256);

  for(var i = 0; i < str.length; i++) {
    var ascii = str[i].charCodeAt(0);

    if(!arr[ascii])
      arr[ascii] = 1;
    else
      arr[ascii]++;
  }

  str = "";

  for(var i = 0; i < arr.length; i++) {
    if(arr[i])
      str += String.fromCharCode(i)
  }

  return str;
}


sortAllChars(str)
