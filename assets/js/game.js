//Game based on tutorial https://marina-ferreira.github.io/tutorials/js/memory-game/

let card = document.getElementsByClassName("game-card");
let cards = [ ... card];

let flippedCard = false;
let firstCard, secondCard;

let showCard = function() {
    this.classList.add("flip");
    this.classList.toggle("disabled")

    if (!flippedCard){
        flippedCard = true;
        firstCard= this;
        return;
    }
   
    secondCard = this;
    flippedCard = false;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();

}

function disableCards(){
    firstCard.classList.add("match");
    secondCard.classList.add("match");
    firstCard.removeEventListener('click', showCard);
    secondCard.removeEventListener('click', showCard);

}

function unflipCards () {
     firstCard.classList.add('unmatch')
     secondCard.classList.add('unmatch')
      
    setTimeout(() => {
     firstCard.classList.remove('unmatch')
     secondCard.classList.remove('unmatch')
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
   }, 1500);
}
cards.forEach(card => card.addEventListener('click', showCard));


