// Function to change the content of the paragraph

function callArrayIndexOf() {
    document.write("indexOf(-): will returns the index position of given element, returns -1 if no element found in array.");

    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    document.write("<br/>initial data myNumbers:", myNumbers);
    let idx = myNumbers.indexOf(50);
    document.write("<br/>index for element 50: ", idx);

}

function callArrayForEach1() {
    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    myNumbers.forEach((item) => {
        document.write("<br/> ", item);
    });
}
function callArrayForEach2() {
    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    myNumbers.forEach((item, index) => {
        document.write("<br/> index:", index, "-- element:", item);
    });
}



// You can add more functions and logic here to practice different JS features.
