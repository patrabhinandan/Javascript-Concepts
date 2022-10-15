const items = [0,1,2,3,4,5,6,7,8];
Array.prototype.myFilter = function(callback){
    let result=[];
    for(let index=0; index<this.length;index++){
        if(callback(this[index],index,this)){ // syntax filter(function(element,index,array),thisArgs) we are not using thisArgs
            result.push(this[index])
        }
    }
    return result;
}
let output = items.myFilter(item=>item%2===0);
console.log(output)