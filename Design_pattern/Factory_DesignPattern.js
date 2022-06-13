function Developer(name){
    this.name = name;
    this.type ="Developer"
}
function Tester(name){
    this.name = name;
    this.type = "Tester"
}

function CreateEmployees(){
    this.create = (name,type)=>{
        switch(type){
            case 1:
                return new Developer(name)
                break;
            case 2: 
                return new Tester(name)
                break;
        }
    }
}
function empDetails(){
    console.log("My name is " + this.name + " and my role is " + this.type);
}
 const createEmployees = new CreateEmployees();
 const employees = [];
 employees.push(createEmployees.create('Tony',1));
 employees.push(createEmployees.create('Saurav',2));
 employees.forEach(emp=>{
    empDetails.call(emp);
 });
 
