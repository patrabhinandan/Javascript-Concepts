let nums1 = [1,4,7,8,10];
let nums2 = [2,3,9];
/* Brute force */
const mergeSorted = function(nums1,nums2){
    let tempArr = [];
    tempArr.push(...nums1);
    tempArr.push(...nums2);
    tempArr.sort((a,b)=>a-b);
    for (let i = 0; i < tempArr.length; i++)
    {
        if (i < nums1.length) {
            nums1[i] = tempArr[i];
        }
        else {
            nums2[i - nums1.length] = tempArr[i];
        }
    }    
    return [nums1, nums2];
}
/* optimised solution */
const mergeSorted1 = function(nums1,nums2){
    let i = 0;
    let j = 0;
    while(i<= nums1.length-1){
        if(nums1[i]> nums2[j]){
            [nums1[i] , nums2[j]]= [nums2[j],nums1[i]];
            nums2.sort((a,b)=>a-b);
        }        
        i++;       
    }
    return [nums1, nums2];

}

//console.log(mergeSorted(nums1,nums2))
console.log(mergeSorted1(nums1,nums2))