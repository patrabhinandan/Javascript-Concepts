let arr = [2,4,1,5,11,9,5,7];
const insertionSort = function(arr){
    for(let i = 1; i < arr.length ; i++){
        let current = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j] ;
            j--;
        }
        arr[j+1] = current;        
    }
    return arr;
}
console.log(insertionSort(arr));