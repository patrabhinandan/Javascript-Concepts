var Mammal = function(){}
Mammal.prototype.name = null;
Mammal.prototype.legs = 'has legs';
Mammal.prototype.eyes = 'has eyes';

Mammal.prototype.printDetails = function(){
    console.log(`${this.name} is a mammal and it ${this.legs} , ${this.eyes} , ${this.haveLungs}`);
}
m1 = new Mammal();
m1.name = 'Dog'
m1.printDetails();

