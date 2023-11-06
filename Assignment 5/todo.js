const tasks = [];
const taskCounter = document.getElementById("taskCounter");

function focusOnInput(){
    document.getElementById("inputField").focus();
 }


 
 
 function  updateTaskCounter() {
     const completedTasks = tasks.filter(task => task.completed).length;        
     taskCounter.innerHTML = `${completedTasks} / ${tasks.length} completed`;
    }
    
    
    function addTask(){
        
        const inputField = document.getElementById("inputField");
        
        if(inputField.value.trim() !== "") {
            
            const taskText = inputField.value.trim();
            
            const task = {
                id: new Date().getTime(),
                text: taskText,
                completed: false
            };
            
            tasks.push(task);
            console.log(tasks);
            
            const listElement = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.classList.add("checkbox");
            checkbox.addEventListener("change", function(e) {
                const taskToUpdate = tasks.find(t => t.id === task.id);
                if(taskToUpdate) {
                    taskToUpdate.completed = e.target.checked;
                    listElement.style.textDecoration = task.completed ? "line-through" : "none";                
                    updateTaskCounter();
                }
            });
            listElement.appendChild(checkbox);  
            
            const textNode = document.createTextNode(task.text);
            listElement.appendChild(textNode);
            
            const todoList = document.getElementById("todo");
            todoList.insertBefore(listElement, todoList.firstChild);
            updateTaskCounter();
            
            inputField.value = "";
            inputField.focus();
            
        };
    }
    
    document.addEventListener("DOMContentLoaded", function(e) {
        const taskform = document.getElementById("taskform");
    
        taskform.addEventListener("submit", function(e) {
            e.preventDefault();
            addTask();
        });
        updateTaskCounter();
        
    });