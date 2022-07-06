/*** Brute Solution */

const dublicateElem = (arr)=>{
    let n = arr.length;
    let tempArr =arr.sort((a,b)=>(a-b));
    
     let result = [];
    for(let i = 0; i < n-1; i ++){
        if(arr[i]==arr[i+1]){
          result.push(arr[i])  
        }
    }
    return [...new Set(result)  ]
}
/** Better Solution **/
const findDuplicate = function(arr) {
    let n = arr.length;
    let tempArray = new Array(n).fill(0);
    for(let i = 0; i <= n; i ++){
        let index = arr[i];
        if(tempArray[index]!=0){
            return arr[i];
        }else{
            tempArray[index]= 1;
        }        
    }
}
/* Optimal Solution -- Turtoise Method*/
const findDuplicateTurtoise = function(arr){
    let slow = arr[0];
    let fast = arr[0];
    do{
        slow = arr[slow];
        fast = arr[arr[fast]];
    }while(slow != fast)
     fast = arr[0];
     if(slow!=fast){
        slow = arr[slow];
        fast = arr[fast]
     }
     return slow;

}
//https://www.youtube.com/watch?v=iiYc32-4ZJY
const dublicateElemIndex = (arr)=>{
    let n = arr.length;
     let result = [];
    for(let i = 0; i < n; i ++){
       let index = arr[i] % n;
       arr[index]+=n;
    }
    for(let j = 0; j < n; j++){
        if((arr[j]/n)>= 2) { result.push(arr[j] % n)}
    }
    return  [...new Set(result)  ]
}
function removeDuplicates( s , n) {
    var exists = new Map();

    var st = "";
    for (var i = 0; i < n; i++) {
        if (!exists.has(s[i])) {
            st += s[i];
            exists.set(s[i], 1);
        }
    }
    return st;
}
function removeDuplicate1(str){
    let temp = "" + str[0];
    for(let i = 0; i < str.length; i++){
        if(temp.indexOf(str[i])==-1){
            temp+=str[i]
        }
    }
    console.log(temp)
}
// removeDuplicate1("godisgod");
 //let A = [2,3,1,2,3];
 let A = [2,5,9,6,9,3,8,9,7,1];
// console.log(dublicateElem(A));
// console.log("with index=",dublicateElemIndex(A));
//console.log(findDuplicate(A));
console.log(findDuplicateTurtoise(A));
