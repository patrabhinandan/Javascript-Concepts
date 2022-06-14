function maxWater(arr){
    let max = 0;
    let l = 0;
    let r = arr.length - 1;
    while(l<r){
        lh = arr[l];
        rh = arr[r];
        let minHeight = Math.min(lh,rh);
        let waterTrapped = minHeight * (r-l);
        max = Math.max(max, waterTrapped);
        if(lh<rh) l++;
        else r--;
    }
    console.log("max water trapped:",max);
}
let arr = [1,8,6,2,5,4,8,3,7];
maxWater(arr);