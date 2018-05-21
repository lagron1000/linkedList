class Node{
    constructor(value) {
         this.data = value;
          this.left = null;
           this.right= null;
          }
        }

        class BinaryTree {
            constructor(){
              this._length = 0;
              this.head = null
            }
            addToHead(node){
                if(this.head === null){
                    this.head = node
                } else {
                    node.left = this.head
                    this.head=node
                }
            }
            addRightLeaf(){

            }
            addLeftLeaf(){
                
            }
          }