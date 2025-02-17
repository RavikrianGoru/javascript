// Function to change the content of the paragraph

//1) Normal Function
function callNormalFunction() {
    alert("Calling normal function by functionName()")
}

//2)  Function eXPRESSION
var functionExpression = function callFunctionExpression() {
    alert("Calling function by functionExpression")
}

//3) Anonymous Functions
var someVariable = function () {
    alert("Calling anonymus function by functionExpression")
}

//4) Function with param and return statements

function someFunction() {
    let a = 10;
    let b = 20;
    document.write(add(a, b));
}
function add(a, b) {
    return a + b;
}

// You can add more functions and logic here to practice different JS features.
