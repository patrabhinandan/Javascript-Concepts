/*You are given a string s and an integer array indices of the same length.
 The string s will be
 shuffled such that the character at the ith position moves to indices[i] in the shuffled string.*/

 var restoreString = function( s, indices){
   let result = [];
   for(let i = 0; i  <s.length;i++){
    let index = indices[i]
    result[index] = s[i];
   }
   let codedString = "";
   result.forEach(item=>{
     codedString += item;
   })
   return codedString;   
 }
 //let s = "codeleet", indices = [4,5,6,7,0,2,1,3];
 let s = "abc", indices = [0,1,2];
 output = restoreString(s,indices)
 console.log(output);