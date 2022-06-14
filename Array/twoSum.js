function twoSum(arr,target){
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        let num2 = target - num1;
        if(map.has(num2)){
            let result = [map.get(num2),i];
            console.log(result);
        }
        map.set(num1,i)
        
    }
        
}
//let nums = [3,2,4], target = 6;
let nums = [2,7,11,15], target = 9;
twoSum(nums,target);
