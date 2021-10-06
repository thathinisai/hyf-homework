const JsUserInput = document.getElementById("UserInput");
const JsButton = document.getElementById("Button");
const JsNoOfgifs = document.getElementById("NoOfgifs");
const JsDispGif = document.getElementById("DispGif");
let url;

function getGiphy() {
  fetch(url)
    .then((response) => response.json())
    .then((gifData) => {
      for (const element of gifData.data) {
        const image = document.createElement("img");
        const NextLine = document.createElement("br");
        image.src = element.images.downsized_still.url;
        JsDispGif.appendChild(image);
        JsDispGif.appendChild(NextLine);
      }
    });
}

function getGiphyAll() {
  JsDispGif.innerHTML = "";
  const inputSearchValue = JsUserInput.value;
  url = `https://api.giphy.com/v1/gifs/search?api_key=ihXo5hIlRPNuopy1YYYtD28Eow9RNkO1&q=${inputSearchValue}&limit=25`;
  getGiphy();
}

function getGiphyWithNumber() {
  JsDispGif.innerHTML = "";
  const inputSearchValue = JsUserInput.value;
  let numberOfGifs = JsNoOfgifs.value;
  url = `https://api.giphy.com/v1/gifs/search?api_key=ihXo5hIlRPNuopy1YYYtD28Eow9RNkO1&q=${inputSearchValue}&limit=${numberOfGifs}`;
  getGiphy();
}

JsButton.addEventListener("click", getGiphyAll);
JsNoOfgifs.addEventListener("input", getGiphyWithNumber);
