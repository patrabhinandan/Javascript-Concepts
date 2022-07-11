const Person = {
    fName : "Abhinandan",
    lName: "Patra"
}
 function printDetails (age,place){
    console.log(`My Full name is ${this.fName} ${this.lName} and my age is ${age} and i live in ${place}`);
 }

 Function.prototype.myBind = function(context,...args){
    context._this = this;
    return function(){
        context._this(...args)
    }
 }
 const newBind = printDetails.myBind(Person,'20','KGP');
 newBind();
