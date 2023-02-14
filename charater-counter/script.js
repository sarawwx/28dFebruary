const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerHTML = textareaEl.value.length;
    remainingCounterEl.innerHTML = 
        textareaEl.getAttribute("maxLength") - 
        textareaEl.value.length;
}