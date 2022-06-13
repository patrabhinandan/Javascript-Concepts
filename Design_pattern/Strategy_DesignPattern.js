function DPS (){
    this.calculate = (className)=>{
        return "Fees: " +className * 2.5 * 1000 + " per/Month";
    }    
}

function SHS (){
    this.calculate = (className)=>{
        return "Fees: " +className * 2.2 * 1000 + " per/Month";
    }    
}

function WB (){
    this.calculate = (className)=>{
        return "Fees: " +className * 2 * 1000 + " per/Month";
    }    
}

function CalculateSchoolFees(){
    this.schoolName ="";
    this.setStrategy = (name)=>{
        return this.schoolName = name;
    }
    this.calculateFees = (details)=>{
        return this.schoolName.calculate(details.className)
    }
}
 const dps = new DPS();
 const shs = new SHS();
 const wb = new WB();
 const calculateSchoolFees = new CalculateSchoolFees();

 const StudentFees = {name:"Abhi", className :10};
 calculateSchoolFees.setStrategy(dps);
console.log("DPS Fees- " +  calculateSchoolFees.calculateFees(StudentFees));

calculateSchoolFees.setStrategy(shs);
console.log("SHS Fees- " +  calculateSchoolFees.calculateFees(StudentFees));