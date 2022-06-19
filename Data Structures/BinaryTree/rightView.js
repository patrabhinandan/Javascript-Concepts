class Node {
    constructor(){
        this.data = data;
        this.left= null;
        this.right = null;
    }
}

function rightView (){
    let resultArray = new Map();
    let map = rightViewUtil(root,resultArray, 0);
    let rightViewNodes = [];
    for(let i = 0; i < map.size; i++){
    	rightViewNodes.push(map.get(i))
    }
    console.log(rightViewNodes);
}
function rightViewUtil(node,list,level){
    if(node == null) return;
    list.set(level,node.data);
    rightViewUtil(node.left,list,level+1);
    rightViewUtil(node.right,list,level+1);
    return list;
}
root = new Node(4);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(1);
root.left.right.left = new Node(6);
root.left.right.left = new Node(7);
rightView();