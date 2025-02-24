
let animation = setInterval(sampleAnimationFun, 1000);
let a = 0;

function sampleAnimationFun() {

    console.log("Called");
    const titleId = document.getElementById("titleId");
    a += 1;
    if (a >= 5) {
        clearInterval(animation);
    } else {
        titleId.style.fontSize = a + "rem";

    }

}



const changes = setTimeout(() => {
    const titleId = document.getElementById("titleId");
    titleId.style.color = "red";
}, 5000);


function stopTimeout() {
    clearTimeout(changes);
}
