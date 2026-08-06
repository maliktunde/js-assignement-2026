# Assignment: "Mini To-Do with Alert, DOM Updates, and Events"

Build a single web page that lets the user add tasks, change task styling, and respond to events.

## What to Create

- `index.html`
- `styles.css` (optional but recommended)
- `js/app.js` (external JavaScript file)
Note: all all scripts should be saved in the js Folder withing this current directory. `assignment-1/js`

## HTML Requirements (Must Include)

- A title
- An Add button that triggers a JavaScript Prompt to collect the new task name
- A container (like a `<ul>` or `<div>`) where tasks will be added dynamically
- Two small buttons:
	- Toggle highlight
	- Clear list
- Every task has a checkbox, clicking the checkbox should strike through the task text to mark it as completed.

## JavaScript Requirements (Must Demonstrate)

### 1) Dialogs

When the user clicks **Add new Item**:

- Collect the name of the task using `prompt(...)`
- If not empty, show a confirmation using `confirm(...)`
- If confirmed, proceed to add the task

### 2) DOM Content + Style Manipulation

When adding a task:

- Create a new list item / div
- Set its text using JavaScript (DOM content)

When **Toggle highlight** is clicked:

- Change the style of all tasks (e.g., toggle a highlighted background or color)

When **Clear list** is clicked:

- Remove all tasks from the container

When **Checkboox on any task** is clicked:

- Toggle strike-through on the task text indicating **cancelled** or **active**

### 3) External JavaScript File + Function Declarations + Calls

In `app.js`:

- Declare at least two functions (e.g., `addTask()` and `toggleHighlight()`).
- In the event handlers, call those functions.
- ensure to create a function to toggle the task strike-through and a function to clear the list

### 4) Events

Use events for:

- Click on Add button
- Click on Toggle highlight button
- Click on Clear list button
