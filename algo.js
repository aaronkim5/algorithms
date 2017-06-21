var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}


var LL = new LinkedList();
console.log(LL);
