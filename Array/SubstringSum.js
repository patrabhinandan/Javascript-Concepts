const resultSubstring = function SumSubString(arr,n,Sum){
    let i; let j;
    for(i = 0; i< n; i ++ ){        
        let tempArray = [];
        let temp = arr[i];
        tempArray.push(arr[i]);
        for( j = i+1 ; j < n ;j++){
            temp += arr[j];
            tempArray.push(arr[j]); 
            if(temp == Sum){
                let index = "the sum of the elemets from " + i  + " to " + j  + " is  " + Sum + " and elements are--" + tempArray;
                return index
            }
        }
        
              
    }
    return "no result found"
}
let N = 10; let S = 22;
//let A = [1,2,3,7,5];
let A = [9,2,3,4,5,6,7,8,9,10];
console.log(resultSubstring(A,N,S))