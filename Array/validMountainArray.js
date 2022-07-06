let nums = [-1,0,2,3,5,13,9,8,7,7]
const validMountainArray = function(arr){
    let peak = arr[0];
    if(arr.length <= 2){
        return false
    }else{
        for(let i = 1; i < arr.length-1; i++){
            if(arr[i+1] == arr[i]){
                return false;
            }
            if(arr[i+1]>arr[i]){
                peak = arr[i+1];
                continue;
            }else{
                if(arr[i+1] < peak){
                    continue;
                }
                if(arr[i+1]<arr[i]){
                    return false
                }
            }
            return true;
        }
    }
    
}
console.log(validMountainArray(nums));