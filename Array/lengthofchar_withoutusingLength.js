/* FInd the length of the char in the array without using .length method */
let arr = ["test", "sub", "karate"]
for (let i in arr) {
    let p = arr[i];
    let l = 0;
    for (let j in p) { l++ }
    let char = ++i; 
    console.log("lenghth of " + char + "th string:", l);
}
