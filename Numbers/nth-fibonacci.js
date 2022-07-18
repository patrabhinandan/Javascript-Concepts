const fibonacci = function(n){
    let a = 0; b = 1; let c;
    for(let i = 2 ; i < n;i++){
        c = a +b ;
        a = b;
        b = c;
    }
    return b;
}
let n = 5;
//console.log(fibonacci(5));
//0 1 1 2 3 5 8
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
    return arr[n-1];
}
console.log(fSeries1(5));