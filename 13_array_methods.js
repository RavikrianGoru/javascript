// Function to change the content of the paragraph

function callArray1D() {

    let myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
    document.write("<br/>initial data myNumbers:", myNumbers);
    let data = myNumbers[4]
    document.write("<br/>4th possion element: ", data);

}

function callArray2D() {

    let myTable = [
        [1, 2, 3, 4, 5],
        [10, 20, 30, 40, 50],
        [0, 1, 0, 1, 0]
    ];
    document.write("<br/>initial 3*5 data myTable:", myTable);
    document.write("<br/>initial myTable[1][4] data :", myTable[1][4]);
    myTable.forEach(
        (item, index) => {
            document.write("<br/> ", index, " item:", item);
            if (index == 1) {
                document.write("<br/> ", item[4]);
            }
        }
    )

}




// You can add more functions and logic here to practice different JS features.
