function reverse(arr){
    let temp=[] ;
    for(let i = arr.length-1; i>=0;i--){
        temp.push(arr[i])
    }
    return temp.join('');
    
    // while(start<= end){
    //     temp = arr[start];
    //     arr[start] = arr[end];
    //     arr[end]=temp;
    //     start++;
    //     end--; 
    // }
     
}
function reverse_word(str){
    let len = str.length;
    let eachWord = str.split(' ');
    let tempStr = '';
    for(let i = 0; i < eachWord.length; i++){
            tempStr += reverse(eachWord[i]) + ' ';
    }
    
    // reverse(str,wstart,len-1);
     return tempStr;
}
let str = "Programming is an Art";
console.log(reverse_word(str))