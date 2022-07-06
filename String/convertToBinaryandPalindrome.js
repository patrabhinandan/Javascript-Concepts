function checkPalindrome(n){
    let num = n.toString(2); let i = 0; j = num.length-1;
    while(i<=j){
        if(num[i]!=num[j]){  
            console.log("Not a palindrome");
             return false
        } 
        i++;
        j--;
    }
    console.log("It is a palindrome")
}
checkPalindrome(10)