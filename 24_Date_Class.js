var dateId = document.getElementById("dataId");

function dispDate() {
    let currDate = new Date();
    console.log("Current Date:", currDate);
    console.log("Date object methods:");
    console.log("currDate.getDate():", currDate.getDate());
    console.log("currDate.getTime():", currDate.getTime());

    console.log("currDate.getFullYear()", currDate.getFullYear());
    console.log("currDate.getMonth() month starts with 0 indexes:", currDate.getMonth());
    console.log("currDate.getDay()", currDate.getDay());
    console.log("currDate.getHours():", currDate.getHours());
    console.log("currDate.getMinutes():", currDate.getMinutes());
    console.log("currDate.getSeconds():", currDate.getSeconds());
    console.log("currDate.getMilliseconds():", currDate.getMilliseconds());
    console.log("currDate.toLocaleDateString():", currDate.toLocaleDateString());


    let specificDate = new Date("2025-02-24T10:00:01");
    console.log("Specified Date:", specificDate);
}

// Run a function after 3 seconds
setTimeout(() => {
    console.log("3 seconds passed");
}, 3000);

// Run a function every 1 seconds
setInterval(() => {
    console.log("2 seconds passed");
    dateId.textContent = new Date();
}, 1000);