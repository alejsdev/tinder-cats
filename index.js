import catsData from "./data.js";
import Cat from "./Cat.js";

let catsArray = ["Bean", "Nala", "Loki", "Simba", "Smokey"];
let kitty = getNewCat();

function render() {
  document.getElementById("cat-info").innerHTML = kitty.getCatHtml();
}

render();

function like() {
  if (catsArray.length > 0) {
    setTimeout(() => {
      kitty = getNewCat();
      kitty.hasBeenLiked = true;
      render();
    }, 1500);
  } else {
    endApp();
  }
}

function swipe() {
  if (catsArray.length > 0) {
    setTimeout(() => {
      kitty = getNewCat();
      kitty.hasBeenSwiped = true;
      render();
    }, 1500);
  } else {
    endApp();
  }
}

function getNewCat() {
  const nextCatData = catsData[catsArray.shift()];
  return nextCatData ? new Cat(nextCatData) : {};
}

function endApp() {
  setTimeout(() => {
    document.body.innerHTML = `<div class="end">
    <p>We have no more  available participants for now, come back later. 😿</p>
    </div>`;
  }, 1500);
}

document.getElementById("like").addEventListener("click", like);
document.getElementById("swipe").addEventListener("click", swipe);
