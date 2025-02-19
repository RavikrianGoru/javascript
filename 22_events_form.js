// Get the form and form elements
let form = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
let countrySelect = document.getElementById("country");

let submitId = document.getElementById("submit");
let changeId = document.getElementById("change");
let focusId = document.getElementById("focus");
let blurId = document.getElementById("blur");
let inputId = document.getElementById("input");
let resetId = document.getElementById("reset");
let selectId = document.getElementById("select");

// Submit Event
form.addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the default form submission
    output.textContent = "Form Submitted!";
});

// Change Event
nameInput.addEventListener("change", function () {
    changeId.textContent = "Name input value changed to: " + nameInput.value;
});
emailInput.addEventListener("change", function () {
    changeId.textContent = "Email input value changed to: " + emailInput.value;
});
countrySelect.addEventListener("change", function () {
    changeId.textContent = "Country selected: " + countrySelect.value;
});

// Focus Event
nameInput.addEventListener("focus", function () {
    focusId.textContent = "Name input field focused!";
});
emailInput.addEventListener("focus", function () {
    focusId.textContent = "Email input field focused!";
});

// Blur Event
nameInput.addEventListener("blur", function () {
    blurId.textContent = "Name input field lost focus!";
});
emailInput.addEventListener("blur", function () {
    blurId.textContent = "Email input field lost focus!";
});

// Input Event
messageInput.addEventListener("input", function () {
    inputId.textContent = "Message input changed: " + messageInput.value;
});

// Reset Event
form.addEventListener("reset", function () {
    resetId.textContent = "Form has been reset!";
});

// Select Event
messageInput.addEventListener("select", function () {
    selectId.textContent = "Text selected inside the message textarea!";
});
