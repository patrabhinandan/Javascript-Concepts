/* Find position of the key element in a sorted rotated array */
 
function findMin (arr,key){
    let low = 0;
    let high = arr.length-1;
    
    while(low <= high){
        let mid = Math.abs(low + high) /2
        if (arr[mid]==key) return mid;
        if(arr[low] < arr[mid]){
            if(key >= arr[low]  && key< arr[mid]){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
       else{
            if(key >arr[mid]  && key<= arr[high]){
                low = mid+1
            } else{
                high = mid-1
            }
         }
    
    }
    return -1;

}
let arr = [5, 6, 1, 2, 3, 4]
//let arr = [3, 4, 5, 6, 7, 8, 0, 1, 2];
console.log(findMin(arr,2));