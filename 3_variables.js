// Function to change the content of the paragraph
function changeContent() {


    let age = 30; // Number
    let isAdult = true; // Boolean
    let user = { name: "Jane", age: 25 }; // Object
    let colors = ["red", "blue", "green"]; // Array

    alert("Check console logs");
    console.log("var : can be defined and assign multiple times.");
    var var_name = "ravi";
    console.log(var_name);
    var name = "kiram";
    console.log(var_name);

    console.log("\n");
    console.log("let: can be assign multiple times but not allowed to re-define.");
    let let_name = "ravi";
    console.log(let_name);
    //let let_name = "kiran";----Error
    let_name = "kiran";
    console.log(let_name);

    console.log("\n");
    console.log("const:can be define and assign only once.");
    const const_name = "ravi";
    //const const_name="kiran"; ----> Error
    //const_name="kiran"; ----> Error
    console.log(const_name);

}

// You can add more functions and logic here to practice different JS features.
