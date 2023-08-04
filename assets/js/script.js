// --- Quote API ---

let quoteButton = document.getElementById('quote-button');
quoteButton.addEventListener('click', getInfo);

let currentInfoIndex = 0;

function getInfo() {
    let quoteDisplay = document.getElementById("quote-display");
    let quoteUrl = 'https://type.fit/api/quotes'
    fetch(quoteUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let info = data[currentInfoIndex];
            let quote = `"${info.text}" - ${info.author.slice(0, -10)}` // slice to remove the last charachters added by the API
            quoteDisplay.textContent = "";
            quoteDisplay.append(quote);
            currentInfoIndex++;
            if (currentInfoIndex >= data.length) {
                currentInfoIndex = 0;
            }
        })
        .catch(function(error) {
            console.error(error);
        })};

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