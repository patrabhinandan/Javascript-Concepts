/* Brute Force--
1- simply sort the array
2 - paas the array and count number of zeroes, 1, 2 and create an array and fill it with same */

/* Optimal solution -- Dutch national flag algo --
mid == 0 ; swap(mid,low) mid++, low ++
mid == 1; mid++
mid = 2 ; swap(mid,high) high --*/
const sortZero = function(arr){
    let low = 0, mid = 0, high = arr.length - 1;
    let temp ;
    while(mid <= high){
        switch(arr[mid]){
            case 0 :
                temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                temp2 = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp2;
                high--;
               break;
        }
    }
    return arr;    

}
let arr = [0,2,1,0,1,1,2,0,2,0,1];
console.log(sortZero(arr));
