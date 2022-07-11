// let myDebounce = function(callback,delay){    
//     return function(){        
//        let timer;
//        let context = this;
//         let args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             callback.apply(context,args)
//         }, delay);
//     }
// }
 const debouncePolyfill = function(callback,delay){
    return function() {
        let context = this;
        let timer;
        let args = arguments;
        clearTimeout(timer);
        timer= setTimeout(() => {
            callback.apply(context,args)
        }, delay);
    }
 }