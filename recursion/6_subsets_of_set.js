var subsetsArr = [];

function findSubsets() {
  var setArr = [1, 2, 3];

  subsets(setArr, 0, setArr.length);
}


function subsets(setArr, start, end) {

  if(start > end){
    return;
  }
  var subArr = setArr.slice(start, end);
  subsetsArr.push(subArr);
  subsets(setArr, start + 1, end);

  subsets(setArr, start, end - 1);


}

findSubsets();
console.log(subsetsArr)
