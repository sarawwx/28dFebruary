const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        
    }
})