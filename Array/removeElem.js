/* Given an integer array nums and an integer val, 
remove all occurrences of val in nums in-place. The relative order of the elements may be changed.*/
 const removeElem = function(nums, val){    
    let i = 0;
    let j = nums.length-1;
    while(i <= j){
        if(nums[i] == val){
            nums[i] = nums[j];
            nums[j] = '_' ;
            j--;
            nums.length--;
            
        }else{
            i++;
        }
       
    }
   // nums = nums.filter(item=>item!='_');
    console.log(nums);
 }
 //let arr = [0,1,2,2,3,0,4,2];val = 2;
 let arr = [1];val = 1;
 removeElem(arr,val);