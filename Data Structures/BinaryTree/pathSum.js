//Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
var hasPathSum = function(root, targetSum) {
    if(root == null) return false;
    else if(root.left == null && root.right == null && targetSum-root.val == 0){
        return true
    }else {
        return hasPathSum(root.left, targetSum- root.val ) || hasPathSum(root.right , targetSum - root.val)
    }
};