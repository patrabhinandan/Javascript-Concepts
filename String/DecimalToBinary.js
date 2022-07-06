function DecimalToBinary(n){
    let binaryArray = new Array(32);
    let i = 0;
    let str="";
    while(n > 0){
        binaryArray[i] = n % 2;
        n = Math.floor(n/2);
        i++;
    }
    for(let j = i-1; j >=0;j--){
        str+=(binaryArray[j]);
    }
    console.log(str)
}
DecimalToBinary(17);