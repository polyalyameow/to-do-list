//variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// event listener for add button
addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task'); //add class to style

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.append(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask'); //add class to style
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteTask'); //add class to style
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert("Please Enter a Task");
    } else{
        taskContainer.appendChild(task);
    }

    inputTask.value = ""; // to delete input from task placeholder

    checkButton.addEventListener('click', function(){
        // li.style.textDecorationLine = "line-through";
        checkButton.parentElement.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    })

})

