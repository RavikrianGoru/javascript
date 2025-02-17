// Function to change the content of the paragraph

function callArraySplice1() {
    document.write("splice(start,end): Changes the content of an array by removing");

    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    document.write("<br/>initial data myNumbers:", myNumbers);
    let myNewNumbers1 = myNumbers.splice(0, 4);
    document.write("<br/>results/return:", myNewNumbers1);
    document.write("<br/>updated myNumbers:", myNumbers);
}

function callArraySplice2() {
    document.write("splice(start,end,elements): Changes the content of an array by removing, replacing, or adding elements.");

    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    document.write("<br/>initial data myNumbers:", myNumbers);
    let myNewNumbers1 = myNumbers.splice(0, 4, "abc");
    document.write("<br/>results/return:", myNewNumbers1);
    document.write("<br/>updated myNumbers:", myNumbers);
}
function callArraySplice3() {
    document.write("splice(start,end,elements): Changes the content of an array by removing, replacing, or adding elements.");

    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    document.write("<br/>initial data myNumbers:", myNumbers);
    let myNewNumbers1 = myNumbers.splice(4, 1, "abc");
    document.write("<br/>results/return:", myNewNumbers1);
    document.write("<br/>updated myNumbers:", myNumbers);
}

function callArraySplice4() {
    document.write("splice(start,end,elements): Changes the content of an array by removing, replacing, or adding elements.");

    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    document.write("<br/>initial data myNumbers:", myNumbers);
    let myNewNumbers1 = myNumbers.splice(4, 0, "abc");
    document.write("<br/>results/return:", myNewNumbers1);
    document.write("<br/>updated myNumbers:", myNumbers);
}



// You can add more functions and logic here to practice different JS features.
