Node = function(){
  this.value = "";
  this.leaves = [];
  this.nodes = [];
};

Node.prototype.checkNodes = function(suf) {
  var node;
  for (var i = 0; i < this.nodes.length; i++) {
    node = this.nodes[i];
    if (node.value == suf[0]) {
      node.addSuffix(suf.slice(1));
      return true;
    }
  }
  return false;
};

Node.prototype.checkLeaves = function(suf) {
  var node, leaf;
  for (var i = 0; i < this.leaves.length; i++) {
    leaf = this.leaves[i];
    if (leaf[0] == suf[0]) {
      node = new Node();
      node.value = leaf[0];
      node.addSuffix(suf.slice(1));
      node.addSuffix(leaf.slice(1));
      this.nodes.push(node);
      this.leaves.splice(i,1);
      return;
    }
  }
  this.leaves.push(suf);
};

Node.prototype.addSuffix = function(suf) {
  if (!suf.length) return;
  if (!this.checkNodes(suf)) {
    this.checkLeaves(suf);
  }
};

Node.prototype.getLongestRepeatedSubString = function() {
  var str = "";
  var temp = "";
  for (var i = 0; i < this.nodes.length; i++) {
    temp = this.nodes[i].getLongestRepeatedSubString();
    if (temp.length > str.length) {
      str = temp;
    }
  }
  return this.value + str;
};


SuffixTree = function(str) {
  this.node = new Node();
  for (var i = 0; i < str.length; i++) {
    this.node.addSuffix(str.slice(i));
  }
}

var st = new SuffixTree("banana");

