let item = [1,2,3,4,5];
Array.prototype.myForEach = function(callback){
    for(let index = 0; index< this.length; index++){
        callback(this[index],index,this);
    }
}


item.myForEach(item=>console.log("each item--",item))