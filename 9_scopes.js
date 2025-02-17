// Function to change the content of the paragraph


//Global Scopes
var a1 = 10;
let a2 = 20;
const a3 = 30;

document.write("Global Scopes:", a1, "-", a2, "-", a3)

function callScopesFunction() {
    //Function Scope
    var a1 = 100;
    let a2 = 200;
    const a3 = 300;
    document.write("Function Scopes:", a1, "-", a2, "-", a3)

    if (10 < 20) {
        //Block Scope
        var a1 = 1000;
        let a2 = 2000;
        const a3 = 3000;

        var x1 = 1000;
        let x2 = 2000;
        const x3 = 3000;

        document.write("Block Scopes:", a1, "-", a2, "-", a3)
    }
    document.write("Block Scopes x1: ", x1);//Can be accessible to block variable as it is defined with var : limitation with var.
    //document.write("Block Scopes:x2", x2);//No acces to block variables
    //document.write("Block Scopes:x3", x3);//No acces to block variables

}


// You can add more functions and logic here to practice different JS features.
