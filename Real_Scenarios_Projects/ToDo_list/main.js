let listMap = new Map();
// To add a List type
function addList(){
    const listContainer = document.getElementById("addListContainer");
    if (listContainer.style.display === "none") {
        listContainer.style.display = "block";
        const form = document.getElementById("new-taskList-form");
        form.elements['new-task-input'].value='';
        form.elements['new-task-input'].focus();
        form.addEventListener('submit',(e)=>{  
            e.preventDefault();         
            addTask(form,listMap);
            
        });
      } else {
        listContainer.style.display = "none";
    }      
}
// To add a parrticular Task Name 
function addTask(form,listMap){
    if(form){
        const listContainer = document.getElementById("addListContainer"); 
        const list_el = document.getElementById("tasksList");
        const taskList_name_el = document.getElementById("new-task-input");           
        const task = taskList_name_el.value;
        let formValid = true;
        if(listContainer.style.display == 'block'){
            formValid = this.checkValidation(task,listMap);
        }
        if(formValid && listContainer.style.display == 'block'){
            const task_el = document.createElement('div');
            task_el.classList.add('taskType');
    
            const task_taskLabel_el = document.createElement('div');
            task_taskLabel_el.innerText = task;
            task_taskLabel_el.classList.add('taskLabel');

            const taskList_content_el = document.createElement('div');
            taskList_content_el.setAttribute('id','content_'+task.toLowerCase());
            taskList_content_el.classList.add('content');

            const action_button_el_container = document.createElement('div');
            action_button_el_container.classList.add('actions');
            const action_button_el = document.createElement('button');
            action_button_el.classList.add('add');
            action_button_el.innerText = "Add a Card";
            action_button_el.addEventListener("click", (e)=> {
                e.preventDefault();
                addTaskName(task.toLowerCase(),taskList_content_el);
            });           
            action_button_el_container.appendChild(action_button_el);

            task_el.appendChild(task_taskLabel_el);
            task_el.appendChild(taskList_content_el);
            task_el.appendChild(action_button_el_container);
            list_el.appendChild(task_el);
            listContainer.style.display = "none";            
        }       
       
    }
}
// To check the validations- Empty or Duplicate
function checkValidation(task,listMap){
    let isValid = true;
    const error_el_empty = document.getElementById("error-task-list-empty");
    const error_el_dup = document.getElementById("error-task-list-duplicate");
    if(task && task.trim() != ''){       
        if(listMap.has(task.toLowerCase())){
            this.showMessage('show','error','ERROR : List Name Already Present. Please Enter Unique List Type.');
            isValid = false; 
        }else{
            listMap.set(task.toLowerCase(),1);
            this.showMessage('show','success','SUCCESS: List Type Added Successfully.');
            isValid = true;
        }
    }else{
        this.showMessage('show','error','ERROR : Please Enter The Name Of The Task List, Which Is Mandatory.');
        isValid = false;
    }
    return isValid
}
// To add Task name corresponding to a particulatr list
function addTaskName(id, parentContainer){
    const content = document.getElementById('content_'+id);
    const taskName_el_container = document.createElement('div');
    taskName_el_container.classList.add('taskNameContainer');

    const task_input_el = document.createElement('input');
	task_input_el.classList.add('taskName');
	task_input_el.type = 'text';
	task_input_el.placeholder = "Please Enter a Task Name";

    const action_button_el = document.createElement('button');
    action_button_el.classList.add('saveTask');
    action_button_el.innerText = "Save";
    action_button_el.addEventListener("click", (e)=> {
        e.preventDefault();
        saveTaskName(task_input_el.value,task_input_el,action_button_el,taskName_el_container);
    }); 
    taskName_el_container.appendChild(task_input_el);
    taskName_el_container.appendChild(action_button_el);
    parentContainer.appendChild(taskName_el_container);
    task_input_el.focus();
}
function saveTaskName(taskName,inputElem,elem, parentContainer){
    if(taskName || taskName.trim()!=''){
        if(parentContainer.classList.contains('errorCls')){
            parentContainer.classList.remove('errorCls');
        }
        inputElem.setAttribute('readonly', 'readonly');
        this.showMessage('show','success','Task Name Added Successfully.');
        parentContainer.removeChild(elem);
    }else{
        parentContainer.classList.add('errorCls');
        inputElem.focus();
        this.showMessage('show','error','ERROR : Please Enter The Task Name.'); 
    }
    

}
// To show common Message
function showMessage(className, type,  msg){
    const commonMsg = document.getElementById("commonMessage");
    commonMsg.innerText = '';
    commonMsg.className = '';
    commonMsg.classList.add('messageLabel' , 'show' , className);
    if(type=='success'){
        if(commonMsg.classList.contains('errorBackground')){
            commonMsg.classList.remove('errorBackground');
        }
        commonMsg.classList.add('successBackground');
    }else if(type=='error'){
        if(commonMsg.classList.contains('successBackground')){
            commonMsg.classList.remove('successBackground');
        }        
        commonMsg.classList.add('errorBackground');
    }
    commonMsg.innerText = msg;    
    setTimeout(() => {
        commonMsg.classList.remove('show');
        commonMsg.classList.add('hide');
    }, 4000);
}
