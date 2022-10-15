const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
let formStepNum= 0;

nextBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        formStepNum++;
        updateFormStep();
        updateProgress();
    })
})
prevBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        formStepNum--;
        updateFormStep();
        updateProgress();
    })
})

const updateFormStep = ()=>{
    formSteps.forEach(steps=>{
        steps.classList.contains('form-step-active') && steps.classList.remove('form-step-active');
    })
    formSteps[formStepNum].classList.add('form-step-active');
}
const updateProgress = ()=>{
    progressSteps.forEach((step,i)=>{
        if(i<formStepNum+1){
            step.classList.add('progress-step-active');            
        }else{
            step.classList.remove('progress-step-active');
        }
        updateProgressBar();
    })
}
const updateProgressBar = ()=>{
    const progresssStepActive = document.querySelectorAll('.progress-step-active')
    progress.style.width = (((progresssStepActive.length -1) / (progressSteps.length -1)) * 100) + '%'
}