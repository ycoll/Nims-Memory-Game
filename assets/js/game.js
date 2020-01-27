//Game loosly based on tutorial https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

let card = document.getElementsByClassName("game-card");
let cards = [ ... card];

let showCard = function() {
    this.classList.toggle("flip");
    this.classList.toggle("disabled");
}

cards.forEach(card => card.addEventListener('click', showCard))

function cardFlip() {
    flippedCards.push(this);
    var len = flippedCards.length;
    if(len === 2){
        moveCounter();
        let isMatch = flippedCards[0].type === flippedCards[1].type;
        isMatch ? matched() : unmatched();        
    }
};

function matched(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("flip");
    openedCards[1].classList.remove("flip");
    openedCards = [];
}

(function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() *16);
     card.style.order = ramdomPos;
   });
 })();
