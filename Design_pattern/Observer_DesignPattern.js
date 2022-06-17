function Subject(){
    this.observerList = [];
}
Subject.prototype = {

    subscribe : function(fn){
        this.observerList.push(fn)
    },
    unsubscribe : function(fntoRemove){
        this.observerList = this.observerList.filter(fn=>{
            if(fn!=fntoRemove){ return fn}
        })
    },
    next : function(message){
        this.observerList.forEach(fn => {
            fn.call(this,message)
        });
    }
}
const subject = new Subject();
function observer1(message){
    console.log("Fire Observer 1.. in " , message)
}
function observer2(message){
    console.log("Fire Observer 2.. in " , message)
}
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer1);
subject.next("test");