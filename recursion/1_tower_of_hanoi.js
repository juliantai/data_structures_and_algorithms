var disks = 3;
var source = [];
var spare = [];
var destination = [];


// var hanoi = function(disc,src,aux,dst) {
//     if (disc > 0) {
//         hanoi(disc - 1,src,dst,aux);
//         console.log("Move disc " + disc + " from " + src + " to " + dst + "<br />");
//         hanoi(disc - 1,aux,src,dst);
//     }
// };


tower(3, 1, 2, 3);


function tower(disk, src, aux, dest, caller) {
  // there shouldn't be a disk 0;
  if(disk === 0) return;
  // console.log(caller)
  tower(disk - 1, src, dest, aux, 0);

  // 1 from 1 to 3
  // 2 from 1 to 2
  // 3 from 1 to 3
  console.log("Moving disk " + disk + " from peg " + src + " to peg " + dest + " ccaller " + caller);
  tower(disk - 1, aux, src, dest, 1);

  // 1 from 1 to 3
  // 2 from 2 to 3
  // 3 from 1 to 3




}
