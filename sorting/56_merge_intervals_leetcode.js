var merge = function(intervals) {
    var arr = [];
    var i = 0;
    var j = 1;
    var v1 = null;
    v2 = null;

    while(intervals[i]) {
        if(!v1)
          v1 = intervals[i];

        v2 = intervals[j];

        if(v2 && (v1[1] > v2[0] || v1[1] === v2[1])) {
            v1 = [v1[0], v2[1]];
            j++;
        } else {
            arr.push(v1);
            v1 = null;
            i = j
            j++;
        }

    }
    return arr;
};

// space complexity is up til O(n)
// time complexity is O(n)
// walk once through the entire thing;
console.log(merge([[1,4],[1,4]]))
