// --- Toggle ---

let toggleButton = document.getElementById('toggle-button');
let body = document.body;
let skills = document.querySelector('.skills-wrapper');
let card = document.querySelectorAll('.card');
let hoverEffects = document.querySelectorAll('.hover-effect');

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    card.forEach(function (card) {
        card.classList.toggle('dark-card');
    });
});

// --- Hover ---

hoverEffects.forEach(function(hoverEffect) {
    hoverEffect.addEventListener('mouseover', function() {
        if (body.classList.contains('dark-mode')) {
            hoverEffect.style.backgroundColor = '#2b3035';
        } else if (!body.classList.contains('dark-mode')) {
            hoverEffect.style.backgroundColor = '#f8f9fa';
        }
    });

    hoverEffect.addEventListener('mouseout', function() {
        hoverEffect.style.backgroundColor = '';
    });
});