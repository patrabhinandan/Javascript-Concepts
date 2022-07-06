/// Kadane's Alg
const result = (arr)=>{
    let n = arr.length;
    let currMax = 0;
    let totalMax = arr[0];
    for(let i = 0; i < n; i++){
        currMax+= arr[i];
        if(currMax < arr[i]){
            currMax = arr[i]
        }       
        if(currMax > totalMax){
            totalMax = currMax
        }             
    }    
        return totalMax;
 
   
}
//let A = [-1,-10,-2,-3,-4];
//let A = [1, 2, 3, -2, 5];
let A = [5,4,-1,7,8];
console.log("K:",result(A));

/**** Basic Approach */
const maxSum = function(arr){    
    let  max = 0;
    for(let i = 0; i < arr.length; i ++){        
        for(let j = i ; j < arr.length ; j ++){
            sum = 0;
             for(let k = i ; k <=j; k++){
                sum+=arr[k];
            }
            max= Math.max(sum,max);           
        }
    }    
    return max;
}
/**** Better Approach */
const maxSum2 = function(arr){    
    let  max = 0;
    for(let i = 0; i < arr.length; i ++){
        sum = 0;        
        for(let j = i ; j < arr.length ; j ++){ 
                sum+=arr[j];
            }
            max= Math.max(sum,max); 
        }    
    return max;
}
/**** Obtimal Approach- Kadane Alg */
const maxSum3 = function(arr){
    let sum = 0;
    let max = arr[0];
    for(let i = 0 ; i < arr.length ; i ++){
        sum +=arr[i];
        max = Math.max(sum,max)
        if(sum <0){ sum = 0}
    }
    return max
}
//let A = [-1,-10,-2,-3,-4];
//let A = [1, 2, 3, -2, 5]
console.log(maxSum3(A));