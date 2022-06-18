postOrder = function (root){
    let result = [];
    return postOrderTraversal(root, result);

}
const postOrderTraversal = (root, result)=>{
    if(root == null) return result;    
    root.left && postOrderTraversal(root.left,result);    
    root.right && postOrderTraversal(root.right,result);
    result.push(root.data);
    return result
}