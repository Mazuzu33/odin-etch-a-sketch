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
        if (event.target.style.backgroundColor === '') {
            let rand1 = Math.floor(Math.random() * 256);
            let rand2 = Math.floor(Math.random() * 256);
            let rand3 = Math.floor(Math.random() * 256);
            let rand4 = Math.random();
            event.target.style.backgroundColor = `rgba(${rand1}, ${rand2}, ${rand3}`;
            event.target.style.opacity = "" + Math.random();
        }
        else {
            if (event.target.style.opacity < 1) {
                console.log(event.target.style.opacity);
                event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
            }
        }
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