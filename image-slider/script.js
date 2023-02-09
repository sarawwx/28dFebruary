const carousel = document.querySelector(".carousel");


let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
}

const dragging = (e) => {
    if(!isDragStart) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);