const container = document.querySelector(".grid");
const button = document.querySelector("button");

function createGrid(squares) {
    for (let i = 0; i < squares; i++) {
        boxContainer = document.createElement("div");
        boxContainer.classList.add("boxContainer");
        container.appendChild(boxContainer);
        for (let i = 0; i < squares; i++) {
            box = document.createElement("div");
            box.classList.add("box");
            boxContainer.appendChild(box);
        }
    }
}

function newBgColor(event) {
    event.target.style.backgroundColor = "blue";
}

function resetBgColor(event) {
    event.target.style.backgroundColor = "transparent";
}
createGrid(4);
container.addEventListener("mouseover", newBgColor);
container.addEventListener("mouseout", resetBgColor);

