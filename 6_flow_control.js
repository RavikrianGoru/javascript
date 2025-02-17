// Function to change the content of the paragraph
function changeContent() {

    document.write("if condition");
    let playerName1 = "Ravi";
    if (playerName1 == "Ravi") {
        document.write("<br/>Player name is matched");
    }

    document.write("<br/><br/>if else condition");
    let playerName2 = "Ravi";
    if (playerName2 == "RAVI") {
        document.write("<br/>Player name is matched");
    } else {
        document.write("<br/>Player name is not matched");
    }


    document.write("<br/><br/>if else if condition");
    var x = 10;
    var y = 20;
    var z = 30;

    if (x == y) {
        document.write("<br/>x==y");
    } else if (x > y) {
        document.write("<br/>x>y");
    } else if (y > z) {
        document.write("<br/>y>z");
    } else if (x !== y) {
        document.write("<br/>x!==y");
    } else {
        document.write("<br/>No condition met");
    }


    document.write("<br/><br/>Ternary operator");
    var n1 = 20;
    var n2 = 30;
    (n1 > n2) ? document.write("<br/> 20>30 using ternary operator") : document.write("<br/> else part 20<=30 using ternary operator");



    document.write("<br/><br/>switch-case");
    let days = 30;
    switch (days) {
        case 10:
            document.write("<br/> switch case matched to 10");
            break;
        case 20:
            document.write("<br/> switch case matched to 20");
            break;
        case 30:
            document.write("<br/> switch case matched to 30");
            break;
        default:
            document.write("<br/> switch case matched to 10");
            break;
    }


}

// You can add more functions and logic here to practice different JS features.
