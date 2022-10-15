const Person = {
     fname:  "Abhinadan",
     lname: "Patra"
}
function printDetails(age,place){
    console.log(`My Full name  is ${this.fname} ${this.lname} and my age is ${age} and i live in ${place}`)
}
printDetails.apply(Person,['20','Inda']);


Function.prototype.myApply = function(context,args){
    context._this = this;
    return context._this(...args)
}
printDetails.myApply(Person,[23,'KGP'])


