const cards = document.querySelectorAll(".card");

let flipCard = false;
let stopGame = false;
let cardOne, cardTwo;

flip = function () {
  if (this === cardOne) return;
  if (stopGame) return;

  this.classList.add("flip");

  if (!flipCard) {
    flipCard = true;
    cardOne = this;

    return;
  }

  cardTwo = this;
  matching();
};
