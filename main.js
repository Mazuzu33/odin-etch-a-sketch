const container = document.querySelector("div");
for (let i = 0; i < 4; i++) {
    boxContainer = document.createElement("div");
    boxContainer.classList.add("boxContainer");
    container.appendChild(boxContainer);
}