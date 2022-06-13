const merged = function(nums1 , m ,nums2 , n){
   let i = m +n - 1;
   let p1 = m-1;
   let p2 = n-1;
   while(p2>=0){
       if(nums2[p2]>nums1[p1] && p1>=0){
        nums1[i]=nums2[p2];
        i--;p2--;
       } else{
         nums1[i]=nums1[p1];
         i--;p1--;
       }
   }
   console.log(nums1);
   
}
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
//let nums1 = [1], m = 1, nums2 = [], n = 0
//let nums1 = [1], m = 1, nums2 = [], n = 0
merged(nums1 , m ,nums2 , n);