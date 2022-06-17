const Person = {
    fName :"Abhinandan",
    lName :"Patra"
}
 function printDetails (age,place){
    console.log(`my name is ${this.fName} ${this.lName} and my age is ${age} and i live in ${place}`);
 }
 Function.prototype.myCall = function(context,...args){
    context._this = this;
    return context._this(...args);
 }

 printDetails.myCall(Person,'23','Kgp');


