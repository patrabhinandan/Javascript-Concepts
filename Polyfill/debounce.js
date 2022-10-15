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
const myDebounce = (fn, delay)=>{
    let timeroutId;
    return ()=>{        
        if(timeroutId){
            clearTimeout(timeroutId);
        }
        timeroutId = setTimeout(() => {
            fn(...args)
        }, delay);
    }

}