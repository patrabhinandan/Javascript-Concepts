class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
 
// Class to print the left view
var root ;
var max_level = 0;
// Recursive function to print left view
function leftViewUtil(node, resultArray, level){     
    // Base Case
    if (node == null)
    {
        return;
    }
     
    // If this is the first node of its level
    if (resultArray.get(level)==null)
    {
        resultArray.set(level,node.data);
    }
     
    // Recur for left and right subtrees
    leftViewUtil(node.left, resultArray, level + 1);
    leftViewUtil(node.right, resultArray, level + 1);
    return resultArray
}
 
// A wrapper over leftViewUtil()
function leftView()
{
    let resultArray = new Map();
    let map = leftViewUtil(root,resultArray, 0);
    let r = [];
    for(let i = 0; i < map.size; i++){
    	r.push(map.get(i))
    }
    console.log(r);
}
 
// Driver code
 
// Testing for example nodes
// Creating a binary tree and
// entering the nodes
root = new Node(10)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(7)
root.left.right = new Node(8)
root.right.right = new Node(15)
root.right.left = new Node(12)
root.right.right.left = new Node(14);
 
console.log(leftView());