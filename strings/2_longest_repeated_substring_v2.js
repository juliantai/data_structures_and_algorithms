// build a trie

// compress the trie

var str = "banana";

function trie(str) {
  var t = {};
  for(var i  = 0; i < str.length; i++) {
    var s = str.slice(i, str.length);
    var sarr = s.split("");
    var curr = t;

    for(var j = 0; j < sarr.length; j++) {
      var c = sarr[j];

      if(!curr[c]) {
        curr[c] = { "$": 0 };
      }

      if(j === sarr.length - 1) {
        curr[c]["$"] = 1;
      }
      curr = curr[c];
    }
    curr = t;
  }
  return t;
}
var
  tri = {},
  end = {},
  keepEnd = {},
  endings = [ 0 ];

tri = trie(str);

optimize(tri)
suffixes(tri, end)
for ( var key in end ) {
  if ( end[ key ].count > 10 ) {
    keepEnd[ key ] = endings.length;
    console.log(end[ key ].obj)
    endings.push( end[ key ].obj );
  }
};

finishSuffixes( tri, keepEnd, end );
console.log(tri)
tri.$ = endings;

function optimize( cur ) {

  var num = 0, last;

  for ( var node in cur ) {

    if ( typeof cur[ node ] === "object" ) {
      var ret = optimize( cur[ node ] );
      if ( ret ) {
        delete cur[ node ];
        cur[ node + ret.name ] = ret.value;
        node = node + ret.name;
      }
    }

    last = node;
    num++;
  }

  if ( num === 1 ) {
    return { name: last, value: cur[ last ] };
  }
}

function suffixes( cur, end ) {
  var hasObject = false, key = "";

  for ( var node in cur ) {
    if ( typeof cur[ node ] === "object" ) {
      hasObject = true;

      var ret = suffixes( cur[ node ], end );

      if ( ret ) {
        cur[ node ] = ret;
      }
    }

    key += "," + node;
  }

  if ( !hasObject ) {
    if ( end[ key ] ) {
      end[ key ].count++;

    } else {
      end[ key ] = { obj: cur, count: 1 };
    }

    return key;
  }
}

function finishSuffixes( cur, keepEnd, end ) {
  for ( var node in cur ) {
    var val = cur[ node ];

    if ( typeof val === "object" ) {
      finishSuffixes( val, keepEnd, end );

    } else if ( typeof val === "string" ) {
      cur[ node ] = keepEnd[ val ] || end[ val ].obj;
    }
  }
}
