function Animal(name, type){
    this.name = name;
    this.type = type;
}
Animal.prototype.haveTail = function(){
    return `${this.name} is a Animal of type ${this.type}`
}

function Cat(name,type){    
    Animal.call(this,name, type)
}

Cat.prototype = Object.create(Animal.prototype);
Cat.constructor = this;

const an = new Animal("tiger" , "Wild");
const ca = new Cat("cat" , "domestic");

ca.haveTail();
