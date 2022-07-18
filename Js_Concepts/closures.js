const addTo = function(passed){
    var add = function(inner){
        return passed + inner        
    }
    return add
}
 const addThree = new addTo(3);
 const addFour = new addTo(4);
 console.log(addThree(1));
 console.log(addFour(1));

 /* function along with its lexical scope  is called a closure-- reference to the variables
 module design pattern
 momoize
 currying
 setTimeOut
 function like Once
 Iterators
 maintain state in asynch world*/