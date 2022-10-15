const Person = {
    fName : "Abhinandan",
    lName: "Patra"
}
 let printDetails = function(age,place,town){
    console.log(`My Full name is ${this.fName} ${this.lName} and my age is ${age} and i live in ${place}  in ${town}`);
 }
 const bind = printDetails.bind(Person,'20','Inda');
 bind("KGP");
//Hard Type all scenarios covered
 Function.prototype.myBind = function(...args){
   let context = this;
    let params = args.slice(1);
    return function(...args2){
        context.apply(args[0],[...params,...args2])
    }
 }
 const newBind = printDetails.myBind(Person,'20','Inda');
 newBind("KGP");

 // Easy type 
 Function.prototype.myBind = function (context, ...args) {
    context._this = this;
    return function () {
      return context._this(...args);
    };
  };
  
  const fn = printDetails.myBind(Person, "WB", "India");
  fn();
