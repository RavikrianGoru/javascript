// Function to change the content of the paragraph
function changeContent() {


    let a = 20;
    let b = 10;
    document.write("a:", a)
    document.write("<br/>b:", b)
    document.write("<br/>Addition + : ", a + b);
    document.write("<br/>Subtraction - : ", a - b);
    document.write("<br/>Multiplication * : ", a * b);
    document.write("<br/>Division / : ", a / b);
    document.write("<br/>Modulus % : ", a % b);


    a++;
    document.write("<br/>Increment ++ : ", a);
    b--;
    document.write("<br/>Decrement -- : ", b);


    document.write("<br/>Equality == : ", a == b);
    document.write("<br/>Not Equality !== : ", a !== b);
    document.write("<br/>Greater than > : ", a > b);
    document.write("<br/>Less than > : ", a < b);

    let flag1 = true;
    let flag2 = false;
    document.write("<br/>flag1  : ", flag1);
    document.write("<br/>flag2  : ", flag2);
    document.write("<br/>logical Not !flag1  : ", !flag1);
    document.write("<br/>logical Not !flag2  : ", !flag2);

    document.write("<br/>logical AND &&  : ", flag1 && flag2);
    document.write("<br/>logical OR ||  : ", flag1 || flag2);



}

// You can add more functions and logic here to practice different JS features.
