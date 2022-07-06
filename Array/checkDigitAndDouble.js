/*
Given an array arr of integers, check if there exists two integers 
N and M such that N is the double of M ( i.e. N = 2 * M).
*/
const isDoubleExist = function(arr){
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i]*2) || map.has(arr[i]%2 == 0 && arr[i]/2)){
            return true;
        }else{
            map.set(arr[i],i)
        }       
    }
    return false;
}
//let arr= [10,2,4,3,5];
let arr = [-20,8,-6,-14,0,-19,14,4];
console.log(isDoubleExist(arr));