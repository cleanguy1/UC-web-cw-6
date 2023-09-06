let score = 0;
scoreHtml = document.getElementById("score")
let name = prompt("your name")
nameDisply = document.getElementById("title")

function inc() {
    score = score + 1;
    scoreHtml.innerHTML = score
}

function welcome() {

}

nameDisply.innerHTML = "welcome, " + name + " to COOOKIEE CLICKEEERRR!!!!";