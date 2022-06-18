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


}

const bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
console.log("Max Height:", bst.findMaxHeight())
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('Total Nodes: ' + bst.totalSize());
