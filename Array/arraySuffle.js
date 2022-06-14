function arraySuffle (arr , n){
    let l = 0, r = n;
    let result = [];
    while(l<n && n < arr.length){
        result.push(arr[l]);
        result.push(arr[r]);
        l++;r++;
    }
    console.log(result);

}
//let nums = [2,5,1,3,4,7], n = 3;
let nums = [1,2,3,4,4,3,2,1], n = 4
arraySuffle(nums,n);