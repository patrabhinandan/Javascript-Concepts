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
    next : function(){
        this.observerList.forEach(fn => {
            fn.call()
        });
    }
}
const subject = new Subject();
function observer1(){
    console.log("Fire Observer 1..")
}
function observer2(){
    console.log("Fire Observer 2..")
}
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer1);
subject.next();