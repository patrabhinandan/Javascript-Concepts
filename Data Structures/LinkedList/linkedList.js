/* Add, AddAt index, remove, RemoveAt index , size , elementAt */

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
    

}
function LinkedList() {
    var length = 0;
    var head = null;
    this.size = () =>{
        return length;
    }
    this.head = () =>{
        return head;
    }
    this.add = (element)=>{
        var node = new Node(element);
        if(head == null){
            head = node
        }else{
            let currentNode = head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            
        }
        length ++
    }
    this.addAt = (element,index)=>{
        var node = new Node(element);
        let currentNode = head;
        var currentIndex = 0;
        let previousNode;
        if(index > length){
            return false
        }
        if(index == 0){
            node.next = currentNode;
            node = head;
        } else{           
               
                while(currentIndex < index){
                    currentIndex ++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;                   
                }
                node.next = currentNode;
                previousNode.next = node;
                
            
            }
            length ++;
        
    }
    this.removeAt = function(index){   
        let currentNode = head;
        let currentIndex = 0;
        let previousNode;
        if(index >= length || index < 0){
            return false
        }
        if(index == 0){
            head = currentNode.next;
        }else{
            while(currentIndex < index){
                currentIndex ++;
                previousNode = currentNode;
                currentNode = currentNode.next;               
            }
        
            previousNode.next = currentNode.next;
        }    
        length --;
        return currentNode.element;
    }
    this.elementAt = function(index){
        let currentNode = head;
        let currentIndex = 0;
        if(index > length){
            return false
        }
        if(index == 0){
            return currentNode.element;
        }else{
            while(currentIndex < index){
                currentIndex++
                currentNode = currentNode.next;
            }
           return currentNode.element;
        }
    }
    this.indexof = function(element){
        let currentNode = head;
        let currentIndex = 0;
        while(currentNode){
            currentIndex ++;
            if(currentNode.element == element){
                return currentIndex;
            }
            currentNode = currentNode.next;
        }        
        return -1;
    }

}
var list = new LinkedList();
list.add('Kitten');
list.add('Puppy');
list.add('Dog');
list.add('Cat');
list.add('Fish');
console.log(list.removeAt(3));
console.log(list.elementAt(3));
console.log(list.indexof('Kitten'));
console.log(list.size());