function dp(num, power) {
  if(power === 0) return 1;


  return num * dp(num, power - 1);
}

// console.log(dp(2,10));




function dpTwo(num, power) {
  if(power === 0)
    return 1;
  else if(power > 0 && power % 2 === 0) {
    return dpTwo(num * num, power / 2);
  } else {
    return num * dpTwo(num, power - 1);
  }

}

console.log(dpTwo(2, 10));


// 2 ^ 2 ^ 2
