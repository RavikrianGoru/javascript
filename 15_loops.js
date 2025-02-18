function callForLoopDemo() {
    document.write("<br/>for (let i = 1; i <= 5; i++)")
    for (let i = 1; i <= 5; i++) {
        document.write("<br/> ", i)
    }
    document.write("<br/>for (let i = 5; i >= 1; i--)")
    for (let i = 5; i >= 1; i--) {
        document.write("<br/> ", i)
    }
}

function callWhileLoopDemo() {
    document.write("<br/>x=10")
    document.write("<br/>while (x<=15)")
    document.write("<br/>x++")

    let x = 10;
    while (x <= 15) {
        document.write("<br/> ", x)
        x++;
    }
}

function callDoWhileLoopDemo() {
    document.write("<br/>x=10")
    document.write("<br/>do{<br/>....<br/>}while (x<=15)")
    document.write("<br/>x++")

    let x = 10;
    do {
        document.write("<br/> ", x)
        x++;
    } while (x <= 15)
}
