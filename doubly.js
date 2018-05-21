class Node{
    constructor(value) {
      this.data = value;
      this.previous = null;
      this.next = null;
    }
  }
   
  class DoublyList {
    constructor(){
      this._length = 0;
      this.head = null;
      this.tail = null;
    }
    addItemToTheBeginning(node){
        node.next = this.head;
        this.head.previous = node
        this.head = node
        this._length++
    }
    addItemToTheEnd(node){
        node.previous = this.tail;
        this.tail.next = node
        this.tail = node
        this._length++
    }
    deleteItem(node){
        if (this.head === node){
            this.head = this.head.next
            this._length--
            return
        }
        var currentNode = this.head;
        while (currentNode !== node){
            currentNode = currentNode.next
        }
        currentNode.previous.next = currentNode.previous.next.next
        this._length--
        return
    }
  }