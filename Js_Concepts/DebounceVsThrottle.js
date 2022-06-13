// Debounce 
/** This calls the callback after only when there is Gap between the two events(delay) */
let counter = 0
function getData(){
    console.log("fetcing data..." + counter++);
}
const debouncePolyfill = function(callback,delay){
    let context = document;
    let args = arguments;
    let timer;
    return function(){
        clearInterval(timer);
        timer = setTimeout(() => {
            callback.apply(context,args);
        }, delay);
    }
}
const searchWords = debouncePolyfill(getData,300);

// Polyfill 
/** This calls the callback every gap of delay, if and doesnt call if the delay is not passed */

const throttlePolyfill = function(callback,context2,arguments,delay){
    let context2 = this, args = arguments;
    let check = true;
     return function(){
        if(check){
            callback.apply(context2,args);
            check = true;
         }        
        setTimeout(() => {
            check = false; 
        }, delay);
     }
}