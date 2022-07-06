function findElemOfArray(arr){
    let map = new Map();
    for(let i = 0; i < arr.length ; i ++){
        let len = arr[i].length;
        //map.set(len,arr[i])
        if(map.has(len)){
            map.get(len).push(arr[i]);
        }else{
            map.set(len,[arr[i]])
        }       
    }
    // for( let [key , value] of map.entries()){
    //     console.log(value);
    // }
    map.forEach(item=> console.log(item))
}
let arr = ['abc', 'ab', 'cde', 'efg', 'ac', 'abcd','efgh','ex','a'];
findElemOfArray(arr)