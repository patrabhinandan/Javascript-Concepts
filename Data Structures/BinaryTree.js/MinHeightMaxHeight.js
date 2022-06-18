findMinHeight = function(node=this.root){
    if(node==null){
        return -1
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if(left<right){
        return left +1;
    }else{
        return right +1;
    }
}
findMaxHeight = function (node = this.root){
    if(node == null){
        return -1
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left > right){
        return left + 1
    }
    else{
        return right + 1
    }
};
findMaxHeight = (root)=>{
    if(root == null) return -1
    else{
        return (Math.max(findMaxHeight(root.left), findMaxHeight(root.right)+ 1))
    }
}
findMinHeight = (root)=>{
    if(root == null) return -1
    else{
        return (Math.min(findMinHeight(root.left), findMinHeight(root.right)+ 1))
    }
}
isBalanced = function(){
    return (this.findMinHeight() >= this.findMaxHeight() -1);
}