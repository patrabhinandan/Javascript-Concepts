const inputBox = document.querySelectorAll("[name = 'inputBox']");
console.log(inputBox);


inputBox.forEach((eachBox)=>{
    if(eachBox.classList.contains('box1')|| eachBox.classList.contains('box2')){
        eachBox.addEventListener('input',()=>{
            let box3Value;
            const box1Value = parseInt(eachBox.closest("tr").querySelector(".box1").value);
            const box2Value = parseInt(eachBox.closest("tr").querySelector(".box2").value);
            const roundValue = parseInt(eachBox.closest("tr").querySelector(".check").value);
            if((typeof box1Value !== "undefined"  && typeof box2Value !== "undefined")){
                box3Value = (box1Value) * (box2Value);
            }
            box3Value = (box1Value?box1Value:0) * (box2Value?box2Value:0);
            console.log(box3Value);
            if(box3Value !== 0){
                setTimeout(() => {
                    assignValue(eachBox,box3Value,roundValue);
                }, 0);
               
            }            
        });        
    }
    
});



const assignValue = (eachBox,box3Value,roundValue)=>{
    var txt;
    if(box3Value !== 0){
        if (confirm("Do You wish to round off!")) {
        txt = "You pressed OK!";
        box3Value = Math.ceil(box3Value/roundValue) * roundValue;
        } else {
        txt = "You pressed Cancel!";
        }
        console.log(txt);
        eachBox.closest("tr").querySelector(".result").value = box3Value;
    }   
   
}