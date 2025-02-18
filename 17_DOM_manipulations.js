function callDemo1() {
    //selector used ccs stype notations "#Id" for id
    let a = document.querySelector("#companyId");
    a.textContent = "ABCD Company";

}


function callDemo2() {
    //selector used ccs stype notations ".className" for class
    let a = document.querySelector(".nav-left");
    a.textContent = "XYZ Company";
}

function callDemo3() {
    //selector used ccs stype notations tagname
    let a = document.querySelector("li");
    a.textContent = "Abc";
}


function callDemo4() {
    //selector used ccs stype notations tagname
    let a = document.querySelectorAll("li");
    a.textContent = "Xyz";
    a.forEach(
        (item) => {
            item.innerText = "xyz";
        }
    );
}

