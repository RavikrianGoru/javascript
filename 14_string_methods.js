function classSplitDemo() {
    let name = "This is sample text";
    document.write("<br/> Initial Data:", name);
    document.write("<br/> split() without delimiter :", name.split());
    document.write("<br/> split() empty string as delimiter :", name.split(""));
    document.write("<br/> split() space as delimiter :", name.split(" "));
    console.log(name.split(" "));
    document.write("<br/> split() i as delimiter :", name.split("i"));

}

function classTrimDemo() {
    let name = "     Same data       ";
    console.log(name);
    document.write("<br/> Initial Data:", name);
    document.write("<br/> Trimmed Data:", name.trim());
    console.log(name.trim());
}

function classCharAtDemo() {
    let name = "This is sample text";
    console.log(name);
    document.write("<br/> Initial Data:", name);
    document.write("<br/> charAt(5) Data:", name.charAt(5));
}

function classSubstringDemo() {
    let name = "This is sample text";
    console.log(name);
    document.write("<br/> Initial Data:", name);
    document.write("<br/> substring(5) Data:", name.substring(5));
    document.write("<br/> substring(5,2) Data:", name.substring(5, 2));

}

function classReplaceDemo() {
    let name = "This is sample text";
    console.log(name);
    document.write("<br/> Initial Data:", name);
    document.write("<br/> replace(\"is\",\"was\") Data:", name.replace("is", "was"));
    document.write("<br/> replaceAll(\"is\",\"was\") Data:", name.replaceAll("is", "was"));
}

function classToUpperCaseDemo() {
    let name = "This is sample text";
    console.log(name);
    document.write("<br/> Initial Data:", name);
    document.write("<br/> toUpperCase() Data:", name.toUpperCase());

}

function classToLowerCaseDemo() {
    let name = "This is sample text";
    console.log(name);
    document.write("<br/> Initial Data:", name);
    document.write("<br/> toLocaleLowerCase() Data:", name.toLocaleLowerCase());
}

