function addRemoveChars(arr) {

  var nArr = [];
  var j = 0;

  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if(arr[i] === "a") {
      nArr[j] = "z";
      j++;
      nArr[j] = "z";
      j++;
    } else if (arr[i] === "b") {
      continue;
    } else {
      nArr[j] = arr[i];
      j++;
    }
    console.log(nArr)
  }
  return nArr.join("");
}


console.log(addRemoveChars("aabb"))
