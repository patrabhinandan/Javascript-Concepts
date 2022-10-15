
/***** Using Bind */
let multiply1 = function(x,y){
    return x*y;
}
let multiplybyTwo = multiply1.bind(this,2);
multiplybyTwo(3);


/***** Using Closure */
function multiply2(y){
    return function(x){ return x*y}
}

let multiplybyTwo1 = multiply2(2);
multiplybyTwo1(3);



/**** Sum of N--func Currying */
let add = function(a) {
    return function(b) {
        if(b){
            return add(a + b)
        }
        else {
            return a
        }
        
    }
}
console.log(add(1)(2)(3)(4)(5)());


//Type 2:
//https://medium.com/@pranjali.roy/currying-interview-questions-2a6823867551
//add(1)(2,3)
//add(1,2,3)
//add(1)(2)(3)

function curry(func) {
    function curried(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function(...more) {
                return curried(...args,...more);
            }
        }
    }
    return curried;
}
function multiply(a, b, c) {
    return a*b*c;
}
let curried = curry(multiply);
console.log(curried(2)(3)(4)); // 24
console.log(curried(2,3)(4));  // 24
console.log(curried(2,3,4));  // 24
console.log(curried(5)(6,7)); // 210