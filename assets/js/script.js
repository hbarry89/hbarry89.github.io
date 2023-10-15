// --- Toggle ---

let toggleButton = document.getElementById('toggle-button');
let body = document.body;
let skills = document.querySelector('.skills-wrapper');
let card = document.querySelectorAll('.card');

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    skills.classList.toggle('dark-skills');
    card.forEach(function (card) {
        card.classList.toggle('dark-card');
    });
});