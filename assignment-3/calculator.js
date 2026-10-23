document.addEventListener('DOMContentLoaded', () => {
    let displayContainer = document.getElementById('display')
    let displayResult = document.querySelector('.display-result')
    
    let fnBtns = document.querySelectorAll('.btn-function') // Get all function buttons (numbers, AC,%, backspace, etc)
    let opBtns = document.querySelectorAll('.btn-operator') // Get all operator buttons (+, -, *, /)
    let numberBtns = document.querySelectorAll('.btn-number') // Get all digit buttons (0-9)
    
        console.log(`fn: ${fnBtns.length}, op: ${opBtns.length}, number: ${numberBtns.length},`)

    // Listen for clicks on digit buttons
    numberBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            displayContainer.textContent += event.currentTarget.dataset.value
        });
    });
   
    
    let lastResult = null
    // map function names to their corresponding functions
    let actions = {
        'clear': clear,
        'backspace': backspace,
        'percentage': percent,
        'toggle-sign': toggleSign
    }

    // Listen for clicks on function buttons
    fnBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            let action = event.currentTarget.dataset.action 
            actions[action]()
                     
            console.log(event.currentTarget.dataset.action)
            
        })
    });



    opBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if(event.currentTarget.dataset.action == '=') return calculate(); 
            displayContainer.textContent += event.currentTarget.dataset.action;
        });
    });

   

     

    function clear() {
        displayContainer.textContent = ''
        displayResult.textContent = ''
    }
    
    function backspace(){
        displayContainer.textContent = displayContainer.textContent.slice(0, -1)
    }

    // Calculate the percentage of the current expression and display the result
    function percent() {
        let display = displayContainer.textContent
        if(display.length == 0) return
        lastResult = eval(sanitizeDisplay(display)) / 100
        displayResult.textContent = lastResult
    }

    function toggleSign() {}

    // Evaluate the expression and display the result
    function calculate() {
        let display = displayContainer.textContent
        if(display.length == 0) return
        lastResult = eval(sanitizeDisplay(display))
        displayResult.textContent = lastResult
    }

    // Sanitize the expression by removing any trailing operators before evaluation
    function sanitizeDisplay(display) {
        display = display.trim() // remove whitespace
        if (isNaN(display.at(-1))) { // check if the last character is not a number (i.e an operator)
            display = display.slice(0, -1) // remove last character if it's an operator
            displayContainer.textContent = display
        } 
        return display
    }

    // Update the expression display (input) with new value
    function updateDisplay(value) {
        let lastChar = displayContainer.textContent.slice(-1)
        if (isNaN(value)) { // If the value is not a number (i.e., it's an operator - +,-,*,/)
           if( displayContainer.textContent.length == 0) return 
           // If the last character is not a number (i.e operator) then remove it before adding the new operator
           if (isNaN(lastChar))  displayContainer.textContent = displayContainer.textContent.slice(0, -1)
           // If the last result is not null, display it in the expression display and clear the result display
            if (lastResult !== null) {
                displayContainer.textContent = lastResult
                displayResult.textContent = ''
                lastResult = null
           }
        }
        // If the last result is not null and the value is a number, clear the display before adding the new value
        if (lastResult !== null && !isNaN(value)) {
           clear()
           lastResult = null
        }
        // Append the new value to the expression display
        displayContainer.textContent += value
    }
});





