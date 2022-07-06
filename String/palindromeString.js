const isPalindrome = function(str){
    let i = 0;
    let j = str.length - 1;
    // if(i>=j){
    //     return true
    // }
    while(i<=j){
        if(str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true
}
let str = "rar";
console.log(isPalindrome(str));