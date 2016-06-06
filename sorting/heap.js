var nums = [11,4,3,2,8,9,10]


// 1,2,3,4,5

function insertHeap(arr, number) {
  arr.push(number)
  bubbleUp(arr, arr.length - 1)

  console.log(arr)
}

function bubbleUp(arr, i) {

  var parentIndex = Math.floor(i / 2);


  if(arr[parentIndex] > arr[i])
    swap(arr, parentIndex, i);

  if(parentIndex > 0)
    bubbleUp(arr, parentIndex);

}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// insertHeap(nums, 1)


function extractMin(arr) {

  // swap(arr, 0, arr.length - 1);

  // var min = arr.pop()

  console.log(arr)
  bubbleDown(arr, 0);
  console.log(arr)
}

function bubbleDown(arr, i) {
  var childOne = 2 * i + 1;
  var childTwo = 2 * i + 2;


  var min = i;


  if(arr[i] > arr[childOne]) {
    min = childOne;
  }

  if(arr[min] > arr[childTwo]) {
    min = childTwo;
  }

  if(min != i) {
    swap(arr, min, i)
    bubbleDown(arr, min);
  }

}

extractMin(nums)


var nums2 = [];
nums.forEach(function(num){
  insertHeap(nums2, num);
  console.log(nums2)
})




