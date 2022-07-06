function removeDub(nums){
    let n = nums.length;
    let len = 0,i
    for(i=0;i<n-1;i++){
        if(nums[i]!=nums[i+1]){
            nums[len++] = nums[i]
        }
    }
    nums[len++]= nums[n-1];
    return len;
}
var removeDuplicates = function(nums) {
    let j = 0;
    let n = nums.length;
    for(let i = 0 ; i < n; i++){
        if(nums[i]!=nums[i-1]){
            nums[j] = nums[i];
            j++; 
        }
    }
    console.log("removed:", nums.slice(0,j))
    return j;
}
let nums = [0,0,1,1,1,2,2,3,3,4];
//console.log(removeDub(nums));
console.log(removeDuplicates(nums));