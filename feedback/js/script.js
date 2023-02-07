const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEls) => {
    ratingEls.addEventListener("click", (event) => {
        removeActive();
        selectedRating = 
            event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {
    if(selectedRating !== "") {
        containerEl.innerHTML = `
        <strong> thank you </strong>
        <br>
        <br>
        <strong> feedback: ${selectedRating}</strong>
        `
    }
})



function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}