//let arr = [2,4,1,5,11,9,5,7];
let arr = [2,4,1,5,11,9,5,7];
const quickSort = function(arr , low , high){
    
    if(low<high){
        let pivot = findPivot(arr,low,high);
        quickSort(arr,low,pivot-1);
        quickSort(arr,pivot+1,high);
    }
    return arr;
    
}

function findPivot(arr , low , high){
    let pivot = arr[high];
    let pIndex = low-1;
    for(j = low;j<=high-1;j++){
        if(arr[j]<=pivot){
            pIndex++;
            [arr[pIndex],arr[j]] = [arr[j],arr[pIndex]];
            
        }
    }
    [arr[pIndex+1],arr[high]] = [arr[high],arr[pIndex+1]];
    return (pIndex+1)
}
// function findPivot2(arr , low , high){
//     let pivot = arr[low];
//     while(low<high){
//         while(arr[low]<=pivot) low++;
//         while(arr[high]>pivot) high--;
//         if(low<high)
//         [arr[low],arr[high]] = [arr[high],arr[low]];
//     }
//     [pivot,arr[high]] = [arr[high],pivot];
//     return high+1;
// }
console.log(quickSort(arr,0,arr.length-1))