function levelOrderTraversal(){
    let Q = [];
        let result = [];
        Q.push(node);
        Q.push(null);
        while(Q.length>0){
            let currentNode = Q.shift();
            if(currentNode == null){
                if(Q.length==0) break;
                Q.push(null)
                result.push('\n');
               // console.log('\n');
                continue;

            }
            result.push(currentNode.data);
           // console.log(currentNode.data);
            if(currentNode.left !== null){
                Q.push(currentNode.left);
            }if(currentNode.right !== null){
                Q.push(currentNode.right);
            }
        }
        return result;
           
}