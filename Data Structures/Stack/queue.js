/** Methods-- dequeue enque, front , print */
var MyQueue = function(){
    var collection = [];
    this.enqueue = function(data) {
        return collection.push(data);
    }
    this.dequeue = function(data) {
        return collection.shift(data);
    }
    this.print = function(){
        return collection
    }
    this.front = function(){
        return collection[0]
    }
}
// var myQueue = new MyQueue();
// myQueue.enqueue(20);
// myQueue.enqueue(30);
// myQueue.dequeue(20);
// console.log(myQueue.print());

var MyPriorityQueue = function(){
    var collection = [];
    this.isEmpty = function(){
        return (collection.length == 0)
    }
    this.enqueue = function(data) {
        let added = false;
        if(this.isEmpty()){
            collection.push(data);
        }else{
            for(let i = 0; i  < collection.length; i ++){
                if(data[1]<collection[i][1]){
                    collection.splice(i,0,data);
                    added= true;
                    break;
                }
            }
            if(!added)
            collection.push(data);
        }
        
    }
    this.dequeue = function(data) {
        let value = collection.shift();
        return value[0];
    }
    this.print = function(){
         console.log(collection);
    }
}
var myPQueue = new MyPriorityQueue();
myPQueue.enqueue(['Dance',2]);
myPQueue.enqueue(['Cook',3]);
myPQueue.enqueue(['Eat',1]);
myPQueue.dequeue(['Eat',3]);
myPQueue.print();