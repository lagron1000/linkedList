class LinkedList {
    constructor(){
        this._length = 0;
        this.head = null
    }
    print(){
        var currentNode = this.head;
        while (currentNode !== null){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
    addToTheBeginning(data){
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this._length++
        }
    addToTheEnd(data){
        var newNode = new Node(data)
        var currentNode = this.head;
        if (this.head === null){
            this.head = newNode
            this._length++
            return newNode
        } else {
            if (currentNode.next !== null) {
                currentNode = currentNode.next;
            } else {
                currentNode.next = newNode
                this._length++
                return newNode
              }
        }
        }
        removeNode(node){
            if (node === this.head){
                this.head = this.head.next
                this._length--;
                return
            }
            var currentNode = this.head
            while (currentNode !== null){
                if (currentNode.next === node){
                    currentNode.next = currentNode.next.next
                    this._length--
                    return
                }
                currentNode = currentNode.next
            }
            }
            removeByIndex(index){
                var currentNode = this.head
                for (let i=0; i<index; i++){
                    currentNode = currentNode.next
                }
                currentNode.next = currentNode.next.next
                this._length--
            }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

