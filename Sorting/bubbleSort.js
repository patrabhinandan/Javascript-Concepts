let arr = [2,4,1,5,11,9,5,7];
const bubbleSort = function(arr){
    let temp;
    for(let i = 0; i < arr.length-1 ; i ++){
       let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];               
                swapped = true;
            }
                        
        }
        // IF no two elements were
        // swapped by inner loop, then break
        if(swapped == false){
            break;
        }
    }
     return arr
    
}
console.log(bubbleSort(arr));
