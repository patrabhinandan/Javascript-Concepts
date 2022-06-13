/*NOT WORKING*/

function AbsoluteSort(arr){
    let n = arr.length;
    let i = 0;
    let j = n-1;
    while(i!=j){
        if(Math.abs(arr[i])<Math.abs(arr[i+1])){
            swapMethodJ(arr[i],arr[j]);
            j--;         
        }else{
            swapMethodI(arr[i],arr[i+1]);
            swapMethodJ(arr[i],arr[j]);
            j--
        }
    }
    console.log(arr);
}
function swapMethodI(A,B){
    let temp ;
    temp = A;
    A= B;
    B = temp;
}
function swapMethodJ(A,B){
    if(Math.abs(A) < Math.abs(B)){ 
        //return;
    }
    else{
        let temp ;
        temp = A;
        A= B;
        B = temp;
     //   return;
    }
    
}

let array = [-8,-5,-3,-1,3,6,9];
AbsoluteSort(array);
