const items = [2,3,4,5,6,7,22,44]
Array.prototype.myFind = function(callback){
    for(let index = 0; index<this.length;index++){
        if(callback(this[index],this,index)) return this[index]
    }
}
const result = items.find((item)=>item>5);
console.log(result)
