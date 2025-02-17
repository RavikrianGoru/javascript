// Function to change the content of the paragraph

function callArrayPush() {
    document.write("push(): adds an element or elements at the end of array and returns the new lenght of array.");
    let fruits = ["apple", "banana"];
    document.write("<br/>initial data fruits:", fruits);
    var results = fruits.push("cherry", "date");
    document.write("<br/>results/return:", results);
    document.write("<br/>updated fruits:", fruits);
}

function callArrayPop() {
    document.write("pop(): removes an element at the end of array and returns that element.");
    let fruits = ["apple", "banana"];
    document.write("<br/>initial data fruits:", fruits);
    var results = fruits.pop();
    document.write("<br/>results/return:", results);
    document.write("<br/>updated fruits:", fruits);
}

function callArrayShift() {
    document.write("shift():removes 1st element of array and returns that element.");
    let fruits = ["apple", "banana"];
    document.write("<br/>initial data fruits:", fruits);
    var results = fruits.shift();
    document.write("<br/>results/return:", results);
    document.write("<br/>updated fruits:", fruits);
}
function callArrayUnshift() {
    document.write("unshift(): adds one or more elements to the starting of the array and returns the new length");
    let fruits = ["apple", "banana"];
    document.write("<br/>initial data fruits:", fruits);
    var results = fruits.unshift("orange");
    document.write("<br/>results/return:", results);
    results = fruits.unshift("guva", "date");
    document.write("<br/>results/return:", results);
    document.write("<br/>updated fruits:", fruits);
}

function callArrayConcat() {
    document.write("concat(): Combines two or more arrays and returns a new array.");
    let fruits = ["apple", "banana"];
    document.write("<br/>initial data fruits:", fruits);
    let animals = ["dog", "cat"];
    document.write("<br/>initial data animals:", animals);

    var results = fruits.concat(animals);
    document.write("<br/>results/return:", results);
}

function callArrayJoin() {
    document.write("join(): creates new string by concatenating all the elements of an array and return a string by a specified separator.");
    let nums1 = [1, 2, 3];
    let nums2 = [10, 20, 30];

    document.write("<br/>initial data nums1:", nums1);
    let nums3 = nums1.join("@");
    document.write("<br/>data nums3:", nums3);
    document.write("<br/>initial data nums2:", nums2);
    nums3 = nums2.join("-");
    document.write("<br/>data nums3:", nums3);

}




// You can add more functions and logic here to practice different JS features.
