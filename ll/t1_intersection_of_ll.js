// run tortise and the hare

function findIntersection(ll, ll2) {
  var currll = ll;
  var currll2 = ll2;

  var len = 1;
  while(currll) {
    currll = currll.next;
    len++;
  }

  var len2 = 1;
  while(currll2) {
    currll2 = currll2.next;
    len2++;
  }


  var curr = ll;
  if(len2 > len1)
    curr = currll2;

  while(curr) {
    if(curr == ll2) {
      return curr.val;
    }
  }

  return -1;

}
