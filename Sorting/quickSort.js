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
function findPivot2(array,low,high){
    let pivot = arr[high];
    let pIndex = low;
    for (let i = low; i <= high-1; i++) {
            if(arr[i]<= pivot){
                [array[i],array[pIndex]] = [array[pIndex],array[i]];
                    pIndex++;
            }     
    }
    [array[pIndex],array[high]] = [array[high],array[pIndex]];
    return (pIndex);
}
console.log(quickSort(arr,0,arr.length-1))