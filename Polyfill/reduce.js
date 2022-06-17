const items = [ 1,2,3,4,5];
Array.prototype.myreduce = function(callback,init,context){
    let acc = init || undefined;
    for(let index=0;index<this.length; index++){
    if(acc){        
            acc = callback.call(context, acc,this[index],index, this); //reduce(function(acc, element,index,array),thisArgs)
    } else{
        acc = this[index]
    }
    }    
    return acc
}
const output = items.myreduce((acc, item)=>item+acc,0);
console.log(output);