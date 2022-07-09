let arr = [2,4,1,5,11,9,5,7];
const selectionSort = function(arr){
    for (let i = 0; i < arr.length-2; i++) {
        iMin = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[iMin]){               
                iMin = j
            }
        }
        [arr[i],arr[iMin]] = [arr[iMin], arr[i]];        
    }
    return arr;
}
console.log(selectionSort(arr));