
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