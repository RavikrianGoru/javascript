// Get the input element and output div
let inputField = document.getElementById("inputField");
let keydownId = document.getElementById("keydown");
let keyupId = document.getElementById("keyup");
let keypressId = document.getElementById("keypress");

// Keydown Event
inputField.addEventListener("keydown", function (event) {
    keydownId.textContent = "Key Down: " + event.key + " (Code: " + event.keyCode + ")";
});

// Keyup Event
inputField.addEventListener("keyup", function (event) {
    keyupId.textContent = "Key Up: " + event.key + " (Code: " + event.keyCode + ")";
});

// Keypress Event (Deprecated, use keydown instead)
inputField.addEventListener("keypress", function (event) {
    keypressId.textContent = "Key Pressed: " + event.key + " (Code: " + event.charCode + ")";
});
