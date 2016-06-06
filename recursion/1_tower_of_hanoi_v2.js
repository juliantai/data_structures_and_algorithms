function towerOfHanoi(disks, original, spare, destination) {
  if(disks === 0) {
    return;
  }

  towerOfHanoi(disks - 1, original, destination, spare);
  console.log("Moving disk " + disks + " from " + original + " to " +  destination);
  towerOfHanoi(disks - 1, spare, original, destination);


}


towerOfHanoi(3, 1, 2, 3)
