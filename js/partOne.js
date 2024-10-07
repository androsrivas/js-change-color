const container = document.querySelector(".container");
const parraf = document.querySelector(".color");
const btn = document.querySelector(".button");

function changeColor() {
    container.setAttribute("style", "background-color:#00008B;");
}

function changeText() {
    parraf.innerText = "darkblue";
}

btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeText);
