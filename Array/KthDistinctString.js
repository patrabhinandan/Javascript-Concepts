var kthDistinct = function(arr, k) {
    let map = new Map();let distinctString = []
    for(let i = 0; i < arr.length; i ++){
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        } else{
            map.set(arr[i],map.get(arr[i])+1);
        }
    }
    //console.log(map);
    map.forEach((key,value)=>{
        if(key == 1){
            distinctString.push(value);
        }
    });    
    return distinctString[k-1] ? distinctString[k-1] :"";
};
//let arr = ["d","b","c","b","c","a"], k = 2;
// let arr = ["aaa","aa","a"], k = 1;
let arr = ["a","b","a"], k = 3;
let output = kthDistinct(arr,k);
console.log(output);