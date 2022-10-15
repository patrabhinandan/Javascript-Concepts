//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

var zigzagTraversal = function(root){
    let result = [];
    const lot = (root,level)=>{
        if(!root) return; // Base case scenario
        // Main logic to form bucket array
        if(result[level]){
            result[level].push(root.val);
        }else{
            result[level] = [root.val];
        }

        lot(root.left,level+1);
        lot(root.right,level+1);        
    }
    lot(root,0);
    result.map((bucket,i)=>{(i%2) ? bucket.reverse() : bucket }); // to find if bucket is odd then reverse it.
    return result;
}
let root = [3,9,20,null,null,15,7];
console.log(zigzagTraversal(root));
/*
1
2  3
  4 5
rerult:
[ [1]
   [2 3]
[5 4]
]
*/