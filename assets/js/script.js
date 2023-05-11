let infoButton = document.getElementById('infoBtn');
infoButton.addEventListener('click', getInfo);

let currentInfoIndex = 0;

function getInfo() {
  let infoDisplay = document.getElementById("infoDisplay");
  let infoUrl = 'https://type.fit/api/quotes'
  fetch(infoUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let info = data[currentInfoIndex];
      let quote = `"${info.text}" - ${info.author}`
      infoDisplay.textContent = "";
      infoDisplay.append(quote);
      currentInfoIndex++;
      if (currentInfoIndex >= data.length) {
          currentInfoIndex = 0;
      }
    })
    .catch(function(error) {
      console.error(error);
    })};