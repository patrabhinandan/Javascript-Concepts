const maxSize = (root)=>{
    if(this.root == null ){
        return -1
    }
    return Math.max(root.data,maxSize(root.left),maxSize(root.right));
}