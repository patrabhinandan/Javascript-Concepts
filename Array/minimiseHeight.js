const heightDiff = (arr,d)=>{
    let n = arr.length;
    arr.sort((a,b) => (a-b));    
    console.log("Sorted=>",arr);
    let maxDiff = arr[n-1] - arr[0];
    smallest = arr[0]+ d;
    tallest = arr[n-1]- d;
    let min , max;
    
    for(let i = 0; i < n-1; i++){
        min = Math.min(smallest,arr[i+1]-d);
        max = Math.max(tallest,arr[i]+d);
        if(min<0) continue;
        maxDiff = Math.min(maxDiff, max-min)
    }
    return maxDiff
}

//let A = [1, 8, 5, 10];
let A = [3, 9, 12, 16, 20]
console.log(heightDiff(A,3))


