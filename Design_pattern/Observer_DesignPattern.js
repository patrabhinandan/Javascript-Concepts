function Subject(){
    this.observer = []
}

Subject.prototype =  {
    subscribe: function (fn) {
        this.observer.push(fn)
    },
    unsubscribe: function(fnToRemove){
        this.observer = this.observer.filter(fn=>{
            if(fn!=fnToRemove) return fn;
        })
       
    },
    next:function(msg){
        this.observer.forEach(fn=>{
            fn.call(this,msg)
        })
    }
}
const subject = new Subject();
function Observer1 (){
    console.log("Observer 1 called")
}
function Observer2 (){
    console.log("Observer 2 called")
}
subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.next();
subject.unsubscribe(Observer2);
subject.next();