const isMonotonic = function(nums){
    let increasing = true;
    let decreasing = true;
    for(let i = 0 ; i < nums.length-1 ; i++){
        if(nums[i] > nums[i+1]){
            increasing = false;
        } if(nums[i] < nums[i+1]){
            decreasing = false;
        }
    }
    return increasing || decreasing
}
let nums = [6,5,4,4];
console.log(isMonotonic(nums))
