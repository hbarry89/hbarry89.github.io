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
      let info = data[currentInfoIndex].text;
      infoDisplay.textContent = "";
      infoDisplay.append(info);
      currentInfoIndex++;
      if (currentInfoIndex >= data.length) {
          currentInfoIndex = 0;
      }
    });
}