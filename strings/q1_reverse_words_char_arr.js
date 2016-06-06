function revWords(str) {
  var i = 0;
  var j = str.length - 1;
  var iStart = 0;
  var jStart = str.length - 1;

  var arr = str.split("");
  var nArr = new Array(str.length);

  while(i <= j) {
    while(str[i] !== " ") i++;
    while(str[j] !== " ") j--;

    var shift = str.length - iStart;

    while(iStart < i) {
      var e = str.length - iStart;
      nArr[e] = arr[iStart];
      iStart++;
    }

    var shift = str.length - jStart;

    while(jStart > j) {
      var e = str.length - ;
      nArr[e] = arr[jStart];
      jStart--;
    }

    console.log(nArr);

  }
}


revWords("I will do it.")
