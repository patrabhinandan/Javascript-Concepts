const missingNumber = (arr)=>{
    let n = arr.length;
    let expectedSum = (n*(n+1))/2;
    let sum = 0;
    for(let i = 0; i<n-1;i++){
        sum+=arr[i]
    }
    return expectedSum- sum

}
let A = [2,1,9,3,5,8,7,4,10]
console.log(missingNumber(A));