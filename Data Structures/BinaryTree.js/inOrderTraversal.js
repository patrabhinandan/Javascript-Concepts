inOrder = function (root){
    let result = [];
    return inOrderTraversal(root, result);

}
const inOrderTraversal = (root, result)=>{
    if(root == null) return result;
    root.left && inOrderTraversal(root.left,result);
    result.push(root.data);
    root.right && inOrderTraversal(root.right,result);
    return result
}
