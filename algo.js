var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}


LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}


var ll = new LinkedList();
ll.addToHead(100);
console.log(ll);
