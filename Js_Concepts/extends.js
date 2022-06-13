var data = [
    {id:1,name:"A"},
    {id:2,name:"B"}
]
// Create and display a variable:
var object = data.findIndex((item)=>{
    return item.name == "A"
});
//console.log(object);
class Animals{
    constructor(name){
        this.name = name
    }    
    getName(){
        return console.log("Your animal name is ", this.name)
    }
}
class Cats extends Animals{
    constructor(name,pet){
        super(name);
       this.isPet = pet;
    }
    
    getPet(){
       super.getName();
        console.log(this.name + " is a pet animal")
    }
    getWild(){
        console.log( " is a wild animal")
    }
}
let C1 = new Cats("cat", true);
//C1.getPet();
//document.getElementById("demo").innerHTML = JSON.parse(object);

