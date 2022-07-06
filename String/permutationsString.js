function permute(str,l,r){
    let s = str;
    if(l==r){
        console.log(s);
        return
    }
    for(let i = l ; i <=r;i++){
       s = swap(s,l,i);
        permute(s,l+1,r);
       s = swap(s,l,i)
    }
}
function swap(str,l,i){
    let arr = str.split('');
    let temp = arr[l];
    arr[l] = arr[i];
    arr[i] = temp;
    let s = arr.toString();
    return s.replaceAll(',','');
}
let str = "abc";
permute(str,0,str.length-1);