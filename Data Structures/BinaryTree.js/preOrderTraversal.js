preOrder = function (root){
    let result = [];
    return preOrderTraversal(root, result);

}
const preOrderTraversal = (root, result)=>{
    if(root == null) return result;
    result.push(root.data);
    root.left && preOrderTraversal(root.left,result);    
    root.right && preOrderTraversal(root.right,result);
    return result
}