class Node {
    constructor(data, left = null, right = null) {
        this.left = left;
        this.data = data;
        this.right = right;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node == null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left)
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                } else {
                    return null
                }
            }
            return searchTree(node)
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (current.data == data) {
                return true
            } if ( data < current.data ) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = function (node, data) {
            if (node === null) {
                return null;
            } if (data === node.data) {
                if (node.left == null & node.right == null) {
                    return null;
                } if (node.left == null) {
                    return node.right
                } if (node.right == null) {
                    return node.left
                }
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            if (data < node.left) {
                node.left = removeNode(node.left, node.data);
                return node
            } if (data > node.right) {
                node.right = removeNode(node.right, node.data);
                return node
            }
            this.root = removeNode(this.root, node.data)
        }
    }
    // findMinHeight(node=this.root){
    //     if(node==null){
    //         return -1
    //     }
    //     let left = this.findMinHeight(node.left);
    //     let right = this.findMinHeight(node.right);
    //     if(left<right){
    //         return left +1;
    //     }else{
    //         return right +1;
    //     }
    // }
    // findMaxHeight(node = this.root){
    //     if(node == null){
    //         return -1
    //     }
    //     let left = this.findMaxHeight(node.left);
    //     let right = this.findMaxHeight(node.right);
    //     if(left > right){
    //         return left + 1
    //     }
    //     else{
    //         return right + 1
    //     }
    // }
    findMinHeight(node= this.root){
        if(node == null) return -1
            return (Math.min(this.findMinHeight(node.left), this.findMinHeight(node.right))+ 1)
    
    }
    findMaxHeight(node= this.root){
        if(node == null) return -1
            return (Math.max(this.findMaxHeight(node.left), this.findMaxHeight(node.right))+ 1)
    
    }
    isBalanced(){
        return this.findMinHeight() >= this.findMaxHeight() -1;
    }
    inOrder(){
        if(this.root == null){
            return null
        }else{
            let result = [];
            function inOrderTraversal(node){
                node.left && inOrderTraversal(node.left);
                result.push(node.data);
                node.right && inOrderTraversal(node.right);
            }
            inOrderTraversal(this.root);
            return result;
        }
        

    }
    preOrder(){
        if(this.root == null){
            return null
        }else{
            let result = [];
            function preOrderTraversal(node){
                result.push(node.data);
                node.left && preOrderTraversal(node.left);
                node.right && preOrderTraversal(node.right);
            }
            
            preOrderTraversal(this.root);
            return result
        }
    }
    postOrder(){
        if(this.root == null){
            return null
        }else{
            let result = [];
            function postOrderTraversal(node){                
                node.left && postOrderTraversal(node.left);
                node.right && postOrderTraversal(node.right);
                result.push(node.data);
            }
            
            postOrderTraversal(this.root);
            return result
        }
    }
    totalSize(node = this.root){
        if(node == null) return 0;
        return (this.totalSize(node.left) + this.totalSize(node.right) + 1)
    }
    levelOrderTraversal(node = this.root){
        let Q = [];
        let result = [];
        Q.push(node);
        Q.push(null);
        while(Q.length>0){
            let currentNode = Q.shift();
            if(currentNode == null){
                if(Q.length==0) break;
                Q.push(null)
                result.push('\n');
               // console.log('\n');
                continue;

            }
            result.push(currentNode.data);
           // console.log(currentNode.data);
            if(currentNode.left !== null){
                Q.push(currentNode.left);
            }if(currentNode.right !== null){
                Q.push(currentNode.right);
            }
        }
        return result;
           
    }
    
    leftView(node = this.root){
        let resultArray = new Map();
        let map = leftViewUtil(root,resultArray, 0);
        function leftViewUtil(node, resultArray, level){  
            if (node == null){
                return;
            }
            if (resultArray.get(level)==null)
            {
                resultArray.set(level,node.data);
            }
            leftViewUtil(node.left, resultArray, level + 1);
            leftViewUtil(node.right, resultArray, level + 1);
            return resultArray
        }
        let leftViewArray = [];
        for(let i = 0; i < map.size; i++){
            leftViewArray.push(map.get(i))
        }
        return leftViewArray
        
    }
    


}

const bst = new BST();
// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);
bst.add(4);
bst.add(3);
bst.add(5);
bst.add(2);
bst.add(1);
bst.add(6);
bst.add(7);
console.log("Max Height:", bst.findMaxHeight())
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('Total Nodes: ' + bst.totalSize());
console.log('Level Order Traversal:');
console.log(bst.levelOrderTraversal());
console.log("Left View of Tree:", bst.leftView());
