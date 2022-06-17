const items = [1, 2,3,4];
Array.prototype.myMap = function(callback){
    let result = [];
    for(let index = 0;index<this.length;index++){
        result.push(callback(this[index],index,this)) // syntax map(function(element,index,array),thisArgs) we are not using thisArgs
    }    
    return result
}
let output = items.myMap(e=>{
   return e * 2
});
console.log(output);