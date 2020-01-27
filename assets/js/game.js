//Game loosly based on tutorial https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

let card = document.getElementsByClassName("game-card");
let cards = [ ... card];

let showCard = function() {
    this.classList.toggle("flip");
    this.classList.toggle("disabled");
}

cards.forEach(card => card.addEventListener('click', showCard))



