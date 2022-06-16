const items = [10,"test", true, 2.99];
 function Iterator (item){
    this.item = item;
    this.index = 0;
 }
Iterator.prototype = {
    hasNext: function(){
        return this.index > this.item.length
    },
    next: function(){
      return this.item[this.index++]  
    }
}
const iter = new Iterator(items);
console.log(iter.next());
console.log(iter.next());

console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());