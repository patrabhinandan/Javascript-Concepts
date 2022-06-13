const KthSmallest = (arr,k)=>{
    let n = arr.length;
    arr.sort((a,b)=>(a-b));
    console.log(arr);
    return arr[k-1];
}
 let A = [7, 10, 4, 20, 15];
 console.log(KthSmallest(A,4));