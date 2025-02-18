function callDemo1() {
    const a = document.getElementById("companyId");
    a.innerText = "ABC Company";
}
function callDemo2() {
    const companyId = document.getElementById("companyId");
    companyId.innerHTML = "<h3>New Company</h3>";
}
function callDemo3() {
    const companyId = document.getElementById("companyId");
    companyId.textContent = "XYZ Company";
}


function callDemo4() {
    const tab1C = document.getElementsByClassName("tab1C");
    tab1C[0].textContent = "TAB1";
    tab1C[1].textContent = "tab1";
    console.log(tab1C);
}
function callDemo5() {
    const tab2C = document.getElementsByClassName("tab2C")[0];
    tab2C.innerHTML = "<h4>Tab2</h4>";
    console.log(tab2C);
}
function callDemo6() {
    const tab3C = document.getElementsByClassName("tab3C")[0];
    tab3C.innerText = "<h4>Tab3</h4>";
    console.log(tab3C);
}

function callDemo7() {
    const tagP0 = document.getElementsByTagName("p")[0];
    tagP0.textContent = "Somrthing updated";
    console.log(tagP0);

}
function callDemo8() {
    const tagP0 = document.getElementsByTagName("p")[0];
    tagP0.innerHTML = "<i>Somrthing updated</i>";
    console.log(tagP0);
}
function callDemo9() {
    const tagP0 = document.getElementsByTagName("p")[0];
    tagP0.innerText = "Somrthing updated";
    console.log(tagP0);
}