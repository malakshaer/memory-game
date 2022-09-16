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

matching = function () {
  let match = cardOne.dataset.language === cardTwo.dataset.language;

  match ? hideCards() : unFlipCards();
};

hideCards = function () {
  cardOne.classList.add("hidden");
  cardTwo.classList.add("hidden");

  unFlipCards(false);
};

unFlipCards = function () {
  stopGame = true;

  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");

    reset();
  }, 1000);
};

reset = function () {
  [flipCard, stopGame] = [false, false];
  [cardOne, cardTwo] = [null, null];
};

(function shuffle() {
  cards.forEach((card) => {
    let randomPlace = Math.floor(Math.random() * 6);
    card.style.order = randomPlace;
  });
})();

cards.forEach((card) => card.addEventListener("click", flip));
