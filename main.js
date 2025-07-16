const grid = document.querySelector(".grid");
const button = document.querySelector("button");
const body = document.querySelector("button");

function createGrid(squares) {
    for (let i = 0; i < squares; i++) {
        boxContainer = document.createElement("div");
        boxContainer.classList.add("boxContainer");
        grid.appendChild(boxContainer);
        for (let i = 0; i < squares; i++) {
            box = document.createElement("div");
            box.classList.add("box");
            boxContainer.appendChild(box);
        }
    }
}

function newBgColor(event) {
    if (event.target.classList.contains("box")) {
        event.target.style.backgroundColor = "blue";
    }
}

function resetGrid() {
    grid.innerHTML = '';
}

createGrid(4);
grid.addEventListener("mouseover", newBgColor);
button.addEventListener("click", () => {
    let squares = prompt("Number of squares per side? (limit of 100)");
    while (squares > 100) {
        squares = prompt("Invalid input. Please enter the number of squares per side again (limit of 100)");
    }
    resetGrid();
    createGrid(squares);
})

