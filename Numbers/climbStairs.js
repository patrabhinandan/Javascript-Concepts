/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */
var climbStairs = function(n) {
    let one =1,two = 1;
    for(let i = 0; i<n-1;i++){
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one
};
let n = 5;
//console.log(climbStairs(n));
/* This is done using BFS and recursion- brute force
construct a BFS tree and traverse from bottom
Actual soltn - is Dynamic programming
take an array of each step to reach the top and check the steps you will see
from each step to reach the top is the sum of previous one to reach the top and previous->previous
IT is similar to fibonacci num-- Sum of previous two*/

const climbStairs2 =function(n){
    if(n<2){
        return n
    }
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i < n ; i++){
        arr[i] = arr[i-1] + arr[i -2];
    }
    return(arr[n-1]);
}
console.log(climbStairs2(n));
 