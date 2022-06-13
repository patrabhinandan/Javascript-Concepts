const items = [2,"test",true,"Abhi",{t:1},2.77];
function Iterator(item){
    this.item = item;
    this.index = 0;
}
Iterator.prototype = {
    hasNext: function (){
        return  this.index < this.item.length;
    },
    next :function(){
        return this.item[this.index++]
    }
}
 const iter = new Iterator(items);
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.hasNext());