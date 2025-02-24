let myElement = document.getElementById("myElement");
let abs = document.getElementById("abs");
let round = document.getElementById("round");
let ceil = document.getElementById("ceil");
let floor = document.getElementById("floor");
let max = document.getElementById("max");
let min = document.getElementById("min");
let random = document.getElementById("random");
let pow = document.getElementById("pow");
let sqrt = document.getElementById("sqrt");


abs.addEventListener("click", () => {
    let a = -110.54;
    console.log(a, Math.abs(a));
    myElement.innerText = a + " --abs()-- " + Math.abs(a) + "\n";
});

round.addEventListener("click", () => {
    let a = -110.54;
    let b = 110.54;
    let c = 110.34;
    console.log(a, Math.round(a));
    console.log(b, Math.round(b));
    console.log(c, Math.round(c));
    myElement.innerText = a + " --round()-- " + Math.round(a) + "\n"
        + b + " --round()-- " + Math.round(b) + "\n" +
        + c + " --round()-- " + Math.round(c) + "\n";
});

ceil.addEventListener("click", () => {
    let a = 110.54;
    console.log(a, Math.ceil(a));
    myElement.innerText = a + " --ceil()-- " + Math.ceil(a) + "\n";
});

floor.addEventListener("click", () => {
    let a = 110.54;
    console.log(a, Math.floor(a));
    myElement.innerText = a + " --floor()-- " + Math.floor(a) + "\n";
});

max.addEventListener("click", () => {
    let a = [1, 2, 3, 4, 5, 6, 7, 3, 6, 5];
    myElement.innerText = a + " --max()-- " + Math.max(...a) + "\n";
});

min.addEventListener("click", () => {
    let a = [1, 2, 3, 4, 5, 6, 7, 3, 6, 5];
    myElement.innerText = a + " --min()-- " + Math.min(...a) + "\n";
});


random.addEventListener("click", () => {
    let a = Math.ceil(Math.random() * 10);
    myElement.innerText =
        " --random()-- " + Math.random() + "\n" +
        " --random()-- " + a + "\n";
});

pow.addEventListener("click", () => {
    let a = 4;
    let b = 2;
    myElement.innerText = a + " --pow(" + a + "," + b + ")-- " + Math.pow(a, b) + "\n";
});

sqrt.addEventListener("click", () => {
    let a = 25;
    myElement.innerText = a + " --sqrt(" + a + ")-- " + Math.sqrt(a) + "\n";
});

/*

Math.abs() – Returns the absolute value of a number.
Math.round() – Rounds a number to the nearest integer.
Math.ceil() – Rounds a number UP to the nearest integer.
Math.floor() – Rounds a number DOWN to the nearest integer.
Math.max() – Returns the largest of zero or more numbers.
Math.min() – Returns the smallest of zero or more numbers.
Math.random() – Generates a random number between 0 (inclusive) and 1 (exclusive).
Math.pow() – Returns the base raised to the exponent power.
Math.sqrt() – Returns the square root of a number.

*/
