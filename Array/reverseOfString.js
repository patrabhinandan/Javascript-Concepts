function reverse(str){
    let n = str.length;
    let arr = str.split(" ");
    let w = [];
    let a = [];
   for(let i = arr.length; i>=0;i--){
       w.push(arr[i]);
   }
   for(let i = n; i>=0;i--){
    a.push(str[i]);
}
   ltr = a.join('');
   wrd = w.join(' ');
  console.log("reverse by letter==>", ltr);
  console.log("reverse by word==>", wrd);
}
let str = "I love India";
reverse(str);
