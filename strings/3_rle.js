// Run Length Encoding

// L10n
// Lxxxxxxxxxxn
// Localization


function rle(string) {
  var i = 1;
  while(i < string.length - 1) {
    var j = i + 2;

    while(j < string.length) {
      var s = string;
      s = s.slice(0, i) + (j - i) + s.slice(j);
      console.log(s);
      j++;
    }
    i++;
  }
}

rle("nailed")
