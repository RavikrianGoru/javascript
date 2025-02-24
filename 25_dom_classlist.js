// Get references to the DOM elements
let myElement = document.getElementById('myElement');
let toggleButton = document.getElementById('toggleButton');
let addButton = document.getElementById('addButton');
let removeButton = document.getElementById('removeButton');
let checkButton = document.getElementById('checkButton');
let replaceButton = document.getElementById("replaceButton");

// 1. `classList.add()` - Add a class to an element
addButton.addEventListener('click', () => {
    myElement.classList.add('bold');
    console.log('Added class "Red"');
});

// 2. `classList.remove()` - Remove a class from an element
removeButton.addEventListener('click', () => {
    myElement.classList.remove('highlight');
    console.log('Removed class "highlight"');
});

// 3. `classList.toggle()` - Toggle a class (add if not present, remove if present)
toggleButton.addEventListener('click', () => {
    myElement.classList.toggle('bold');
    console.log('Toggled class "bold"');
});

// 4. `classList.contains()` - Check if an element has a specific class
checkButton.addEventListener('click', () => {
    if (myElement.classList.contains('highlight')) {
        console.log('Element has the "highlight" class');
    } else {
        console.log('Element does not have the "highlight" class');
    }
});

// 5. `classList.replace()` - 

replaceButton.addEventListener("click", () => {
    if (myElement.classList.contains('bold')) {
        console.log("replace if the content is bold then replace to heighlited-1");
        myElement.classList.replace("bold", "highlight");
    } else {
        console.log("replace if the content is bold then replace to heighlited-2");
        myElement.classList.replace("highlight", "bold");
    }



});
