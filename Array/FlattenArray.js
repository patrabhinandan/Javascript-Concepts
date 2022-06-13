function FlattenArray(arr){
    let stack = [...arr];
    var result = [];
    while(stack.length){
        let item = stack.pop();
        if(Array.isArray(item)){
            stack.push(...item);
        }else{
            result.push(item);
        }
    }
    console.log(result.reverse());
}
let arr = [1,2,3,[4,5],[12,[5,78,99],3,22],34];
FlattenArray(arr);
