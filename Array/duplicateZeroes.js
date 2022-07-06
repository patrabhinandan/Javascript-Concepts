/*Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]*/
var duplicateZeros = function(arr){
    let zeroes = 0;
    let len = arr.length;    
        for(let i=0;i<len;i++){
            if(arr[i]==0){
                zeroes++;
            }             
        }
        let i = len;
        let j = len + zeroes;
        while(i != j){
            insertZero(arr,i,j);
                j--;
                if(arr[i]==0){
                    insertZero(arr,i,j);
                    j--;
                }            
            i--;
        }
      console.log(...arr);
    
}
function insertZero(arr,i,j){
    if(j<arr.length){
        arr[j]= arr[i];
    }
}
let arr = [1,0,2,3,0,4,5,0]
duplicateZeros(arr);