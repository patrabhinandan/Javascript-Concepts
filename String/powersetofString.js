//let str = "abc";
// const powerset = function(str,i,curr){
//     let len = str.length;
//     if(i == len){
//         console.log(curr);
//         return;
//     }    
//     powerset(str, i+1, curr+str[i]);
//     powerset(str, i+1 , curr);
// }
//powerset(str,0,"");

function subsequence(str, res){
    if(str.length == 0 ){
        res[0]="";
        return 1
    }
    let smallerOutputSize = subsequence(str.substr(1),res);
    for(let i = 0; i < smallerOutputSize;i++ ){
        res[i+smallerOutputSize] = str[0]+ res[i];
    }
    return res.length;//2 * smallerOutputSize;
    
}
const main = function (str){
    let curr = [];
    let result = subsequence(str,curr)
    for (let index = 0; index < result; index++) {       
        console.log(curr[index]);
    }
}
let str = "abc";
main(str);