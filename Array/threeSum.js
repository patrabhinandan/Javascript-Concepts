const threeSum= function (num){
    let len = num.length;
    let res = [];
    let arr = num.sort((a,b)=>a-b);
    for(let i = 0; i < arr.length - 2; i++){
        if(i ==0 || (i > 0 && arr[i] != arr[i-1])){
            let sum = 0 - arr[i];
            let low = i + 1;
            let high = arr.length - 1;
            while ( low < high){
                if(arr[low] + arr[high] == sum){
                    
                    res.push([arr[i], arr[low], arr[high]]);
                    while(low < high && arr[low] !== arr[low+1]) low ++;
                    while(low < high && arr[high] !== arr[high-1]) high --;
                }
                else if(arr[low] + arr[high]<  sum ) low ++;
                else high --;
                
            }

        }
    }
    return res;
}
let arr = [-1,-2,0,-3,7,1,2,-5,-2,-1,3];
console.log(threeSum(arr));