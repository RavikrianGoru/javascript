// Function to change the content of the paragraph
function changeContent() {

    alert("Check console logs");
    console.log("Primitive Datatypes");
    let name = "Ravi"; //String
    console.log(name + "---->" + typeof name);
    console.log("");

    let age = 30; // Number
    console.log(age + "---->" + typeof age);
    console.log("");

    let height = 6.5; // Number
    console.log(height + "---->" + typeof height);
    console.log("");


    let isAdult = true; // Boolean
    console.log(isAdult + "---->" + typeof isAdult);
    console.log("");

    let nullName = null;
    console.log(nullName + "---->" + typeof nullName);
    console.log("");

    let yourName;
    console.log(yourName + "---->" + typeof yourName);
    console.log("");


    console.log("Complex Datatypes");
    let fruites = ["apple", "mango", 55, 4.5, { name: "ravi" }];
    console.log(fruites + "---->" + typeof fruites);
    console.log("Array.isArray(arrayObj)" + Array.isArray(fruites));
    console.log("");


    let games = {
        cricket: "Ravi",
        football: "Kiran"
    }
    console.log(games + "---->" + typeof games);
    console.log(games.cricket + "---->" + typeof games);
    console.log(games.football + "---->" + typeof games);
    console.log("Array.isArray(games)" + Array.isArray(games));
    console.log("");


}

// You can add more functions and logic here to practice different JS features.
