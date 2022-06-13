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
let A = [-1,-10,-2,-3,-4];
//let A = [1, 2, 3, -2, 5]
console.log(result(A))