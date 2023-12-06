// --- Toggle ---

let toggleButton = document.getElementById('toggle-button');
let body = document.body;
let card = document.querySelectorAll('.card');
let iconLinks = document.querySelectorAll('.icon-links');

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    card.forEach(function (card) {
        card.classList.toggle('dark-card');
    });
    iconLinks.forEach(function (iconLink) {
        iconLink.classList.toggle('dark-icon-links');
    });
});

// --- Hover ---

let hoverEffects = document.querySelectorAll('.hover-effect');
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