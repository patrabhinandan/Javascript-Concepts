/* Using recurssion */
function fibonacciRec(n){
        if( n == 0){
            return 0
        }
        if( n == 1){
            return 1
        }
        else{
            return (fibonacciRec(n-1) + fibonacciRec(n-2));
        }    
    
}
function main(num){
    for(let i = 0 ; i<num ;i ++){
        console.log(fibonacciRec(i));
    }
}
let num = 5;
//main(num);

/**** Using while */
const fSeries = function(n){
    let x = 0;
    let y = 1;
    let c = x + y;
    console.log(x);
    while(c < n){       
        console.log(c);
        c = x + y;
        x = y;
        y = c;
    }
}
//fSeries(5);
const fSeries1 =function(n){
    if(n<2){
        return n
    }
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i < n ; i++){
        arr[i] = arr[i-1] + arr[i -2];
    }
    console.log(arr);
}
fSeries1(5);