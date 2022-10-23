//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function(nums) {
    let map = new Map();
    let duplicatePresent = false;
    for (let i = 0; i <= nums.length; i++) {
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
            duplicatePresent = true
        }else{
            map.set(nums[i],1)
        }
        
    }
    return duplicatePresent
    
};

let nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));