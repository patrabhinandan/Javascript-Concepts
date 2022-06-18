let myDebounce = function(callback,delay){    
    return function(){        
       let timer;
       let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(context,args)
        }, delay);
    }
}