// const throttlePolyfill = function(callback,delay, arguments){
//     let flag = false;
//     let context = this;
//     let args = arguments;
//     return function(){
//         if(flag){
//             callback.apply(context,args);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, delay);
//         }
//     }
// }


const throttlePolyfill = (callback,delay,arguments)=>{
    let flag = false;
    let context = this;
    return ()=> 
    {
        if(flag){
            callback.apply(context,...arguments);
            flag = false;
        }
        setTimeout(() => {
            flag = true;
        }, delay);
    } 
}
const myThrottle = (fn,delay)=>{
    let last = 0;
    return (...args)=>{
        let now = new Date().getTime();
        if(now - last < delay){
            return ;
        }
        last = now;
        fn()
    }
}