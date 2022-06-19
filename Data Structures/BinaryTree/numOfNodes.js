const size = (root)=>{
    if(root == null) return 0;
    return (size(root.left) + size(root.right) + 1)
}