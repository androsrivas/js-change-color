const container = document.querySelector(".container");
const parraf = document.querySelector(".color");
const btn = document.querySelector(".button");

function changeColorByClick() {
    if (container.getAttribute("style", "background-color:red;") == "background-color:red;") {
        container.setAttribute("style", "background-color:darkblue;");
        parraf.innerText = "darkblue";
    } else {
        container.setAttribute("style", "background-color:red;");
        parraf.innerText = "red";
    }
}

btn.addEventListener("click", changeColorByClick);
