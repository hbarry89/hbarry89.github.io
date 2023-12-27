// --- Toggle ---

let toggleButton = document.getElementById('toggle-button');
let body = document.body;

toggleButton.addEventListener('click', function() {
    let currentMode = body.getAttribute('data-bs-theme');
    if (currentMode === 'light') {
        body.setAttribute('data-bs-theme', 'dark');
    } else {
        body.setAttribute('data-bs-theme', 'light');
    }
});

// Hover

let hoverEffects = document.querySelectorAll('.hover-effect');

hoverEffects.forEach(function(hoverEffect) {
    hoverEffect.addEventListener('mouseover', function() {
        let currentMode = body.getAttribute('data-bs-theme');
        if (currentMode === 'light') {
            hoverEffect.style.backgroundColor = '#f8f9fa';
        } else if (currentMode === 'dark') {
            hoverEffect.style.backgroundColor = '#2b3035';
        }
    });

    hoverEffect.addEventListener('mouseout', function() {
        hoverEffect.style.backgroundColor = '';
    });
});