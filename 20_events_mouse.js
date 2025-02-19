// Get the element to attach events
let mouseArea = document.getElementById("mouseArea");

let clickId = document.getElementById("click");
let dblclickId = document.getElementById("dblclick");
let mouseoverId = document.getElementById("mouseover");
let mouseoutId = document.getElementById("mouseout");
let mousemoveId = document.getElementById("mousemove");
let mouseenterId = document.getElementById("mouseenter");
let mouseleaveId = document.getElementById("mouseleave");
let mousedownId = document.getElementById("mousedown");
let mouseupId = document.getElementById("mouseup");
let contextmenuId = document.getElementById("contextmenu");

// Click Event
mouseArea.addEventListener("click", function () {
    clickId.textContent = "Mouse Clicked!";
});

// Double Click Event
mouseArea.addEventListener("dblclick", function () {
    dblclickId.textContent = "Mouse Double Clicked!";
});

// Mouseover Event
mouseArea.addEventListener("mouseover", function () {
    mouseoverId.textContent = "Mouse Over the area!";
});

// Mouseout Event
mouseArea.addEventListener("mouseout", function () {
    mouseoutId.textContent = "Mouse Left the area!";
});

// Mousemove Event
mouseArea.addEventListener("mousemove", function (event) {
    mousemoveId.textContent = "Mouse Moved at position (" + event.offsetX + ", " + event.offsetY + ")";
});

// Mouseenter Event (does not bubble)
mouseArea.addEventListener("mouseenter", function () {
    mouseenterId.textContent = "Mouse Entered the area!";
});

// Mouseleave Event (does not bubble)
mouseArea.addEventListener("mouseleave", function () {
    mouseleaveId.textContent = "Mouse Left the area!";
});

// Mousedown Event
mouseArea.addEventListener("mousedown", function () {
    mousedownId.textContent = "Mouse Button Pressed!";
});

// Mouseup Event
mouseArea.addEventListener("mouseup", function () {
    mouseupId.textContent = "Mouse Button Released!";
});

// Contextmenu Event (Right-click)
mouseArea.addEventListener("contextmenu", function (event) {
    event.preventDefault();  // Prevent default context menu
    contextmenuId.textContent = "Right Mouse Button Clicked (Context Menu)";
});
