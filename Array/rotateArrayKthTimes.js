function rotateRight(arr){
    let n = arr.length;
    let temp = arr[n-1];
        for(i= n-1;i>0 ; i--){ // to right shift the elem to one place 
            arr[i]= arr[i-1]
        }
        
        arr[0]=temp;
        return arr;
}
function rotateArray(arr,k){
    let temp= [];
    for(let i = 0;i<k;i++){
        temp =  rotateRight(arr,i)
    }
    return temp;

}

let arr = [1,2,3,4,5];
console.log(rotateArray(arr,3));