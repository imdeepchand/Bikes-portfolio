// ----------------------galery---------------------
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', function() {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

// ----------------hamburgur button---------------------
const menuBtn = document.querySelector('.menu-btn');
const toggle = document.querySelector('#toggle');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    toggle.classList.toggle('active');
})