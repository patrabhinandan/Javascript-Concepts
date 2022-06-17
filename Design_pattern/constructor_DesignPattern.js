function Student(name,age,classRoom){
    this.name = name;
    this.age = age;
    this.class = classRoom;
    this.printDetails = function(){
        console.log(`My name is ${this.name} , of age ${this.age} and i study in class ${this.class}`)
    }
}
let s1 = new Student("Abhi",32,8);
s1.printDetails();
