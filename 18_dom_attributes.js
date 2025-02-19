function callDemo1() {

    const attrs = document.querySelector("div").attributes.id;
    console.log(attrs);

    const idVal = document.querySelector("div").attributes.id.value;
    console.log(idVal);

    const divTag = document.querySelector("div");
    divTag.setAttribute("style", "border:5px solid black");


}

function callDemo2() {
    const divTag = document.querySelector("div");
    divTag.removeAttribute("style");
}