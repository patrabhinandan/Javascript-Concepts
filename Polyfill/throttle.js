const throttlePolyfill = function(callback,delay, arguments){
    let flag = false;
    let context = this;
    let args = arguments;
    return function(){
        if(flag){
            callback.apply(context,args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}