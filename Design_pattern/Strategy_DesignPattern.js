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


/**************************************/
function Coromondal(details){
    this.fareCalc=(details)=>{
        return 2000;
    }
    
}
function HowrahMail(details){
    this.fareCalc=(details)=>{
        return 2500;
    }
}
function CalculateFare(){
    trainName = ""
    this.setStrategy=(train)=>{
        return this.trainName = train
    }
    this.fare = (details)=>{
       return this.trainName.fareCalc(details);
    }
}

const cor = new Coromondal();
const hwhMail = new HowrahMail();
const calculateFare = new CalculateFare();
let details = {name:'Abhi', place:'Chennai'}
calculateFare.setStrategy(hwhMail);
console.log("Train fare==", calculateFare.fare(details));

calculateFare.setStrategy(cor);
console.log("Train fare==", calculateFare.fare(details));