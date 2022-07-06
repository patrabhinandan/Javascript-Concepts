// function twoSum(arr,target){
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         let num1 = arr[i];
//         let num2 = target - num1;
//         if(map.has(num2)){
//             let result = [map.get(num2),i];
//             console.log(result);
//         }
//         map.set(num1,i)
        
//     }        
// }
 function twoSumBrute(arr, target){
    for( let i = 0; i < arr.length ; i++){
        let num1 = arr[i];
        let num2 = target - arr[i];
        for( let j = i+1 ; j < arr.length ; j ++){
            if(arr[j]== num2){
                let result = [];
                result.push(i)
                result.push(j);
                console.log(result);
            }
        }
    }
 }

 function twoSum(arr, target){
    let map = new Map();
    for (let index = 0; index < arr.length; index++) {
        let num1 = arr[index]; 
        let num2 = target - arr[index];
       if(map.has(num2)){
        let result = [ map.get(num2),index];
        console.log(result)
        }       
       map.set(num1,index)        
    }
}
    
//let nums = [3,2,4], target = 6;
let nums = [2,7,11,15], target = 18;
//twoSumBrute(nums,target);
twoSum(nums,target);
