// Function to add new task Item
function addItem() {
    let task = prompt("Enter your task");
    if (task != null && task != '') {
        let shouldAdd = confirm("Do you want to add this task?");
        if (shouldAdd) {
            let taskLists = document.getElementById("taskLists");
            //  let li = document.createElement("li");
            //  li.classList.add("task");
            //  li.textContent = task;
            //  taskLists.appendChild(li);

            // Using template literals to create the list item
            let li = `<li class='task'>${task} 
                <input type='checkbox' class='task-checkbox' />
            </li>`;
            // let li = "<li class='task'>" + task + "</li>";
            taskLists.innerHTML += li;
        }
    }
}

// Function to toggle highlight on tasks
function toggleHighlight() {
    let tasksContainer = document.getElementById("tasksContainer");
    tasksContainer.classList.toggle("highlight");
}