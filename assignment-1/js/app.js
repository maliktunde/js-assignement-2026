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

            // Bind the event listener to the checkbox
            let checkboxes = document.getElementsByClassName("task-checkbox");
            // loop through the checkboxes and add event listener to each checkbox
            for (let checkbox of checkboxes) {
                checkbox.addEventListener('change', markTaskCompleted);
            }
  
        }
    }
}

// Function to toggle highlight on tasks
function toggleHighlight() {
    let tasksContainer = document.getElementById("tasksContainer");
    tasksContainer.classList.toggle("highlight");
}

/**
 * Steps to strike through the completed tasks
 * 
 * 1. Target the checkbox element of each task item
 * 2. Add an event listner to each of the checkboxes
 * 3. When the checkbox is checked, add a class to the parent li element to strike through the text
 * 4. When the checkbox is unchecked, remove the class from the parent li element to remove the strike through
 * 5. Use CSS to style the completed tasks with a strike through effect
 * 6. A function to bind the event listener to each checkbox when a new task is added
 */
// Function to handle checkbox change event (Strike Through)
function markTaskCompleted(event) {
    let elem = event.target; //targets the checkbox element
    let taskItem = elem.parentElement;
    taskItem.classList.toggle("completed"); 


    console.log(`name: ${elem.tagName}, type: ${elem.type}, checked: ${elem.checked}`);
    
}
// Function to clear all the tasks in one click
function ciearlist() {
   const tasklist = document.getElementById(tasklist)
   taskList.innerHTML = '';
}