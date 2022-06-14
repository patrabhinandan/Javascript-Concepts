function partition(arr,pivot){
    let result = [];
    for(let i = 0; i< arr.length;i++){
        if(arr[i]<pivot){
            result.push(arr[i])
        }
    }
    for(let i = 0; i< arr.length;i++){
        if(arr[i]==pivot){
            result.push(arr[i])
        }
    }
    for(let i = 0; i< arr.length;i++){
        if(arr[i]>pivot){
            result.push(arr[i])
        }
    }
    console.log(result);
}
let arr = [9,12,5,1,10,14,3,10], pivot = 10;
partition(arr,pivot);