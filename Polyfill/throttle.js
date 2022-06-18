const Mythrottle = function(callback,delay){
    let flag = true;
    let context = this , args = arguments;
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