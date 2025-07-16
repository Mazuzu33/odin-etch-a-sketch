const container = document.querySelector("div");
for (let i = 0; i < 4; i++) {
    boxContainer = document.createElement("div");
    boxContainer.classList.add("boxContainer");
    container.appendChild(boxContainer);
    for (let i = 0; i < 4; i++) {
        box = document.createElement("div");
        box.classList.add("box");
        boxContainer.appendChild(box);
    }
}