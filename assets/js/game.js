//Game based on tutorial https://marina-ferreira.github.io/tutorials/js/memory-game/

let card = document.getElementsByClassName("game-card");
let cards = [ ... card];

let sec = 0;
let min = 0;
let time = document.querySelector("#time")
let interval; 
let match = document.getElementsByClassName(".match")


let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let isMatch;
    
timer(time);
    
let showCard = function() {
     
    
    if (lockBoard) return;
    if (this === firstCard) return

    this.classList.add("flip");
   

    if (!flippedCard){
        flippedCard = true;
        firstCard= this;
        return;
    }
  
    secondCard = this;
    
   
    checkForMatch();
}


 function timer(time){
    
    console.log('Im workiing');
    let interval= setInterval(function(){
    sec++
    time.innerHTML = "Time  "+min+" : "+sec;
   

    if(sec == 60){
        min ++
        sec = 0;
    }
    
    if(min == 60){
        min = 0;
        sec = 0;
    }
    if(match.length == 16){
        clearInterval(interval)

    }
    
}, 1000);
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
 
    resetBoard();
}

function unflipCards () {
     lockBoard = true

     firstCard.classList.add('unmatch')
     secondCard.classList.add('unmatch')
      
    setTimeout(() => {
     firstCard.classList.remove('unmatch')
     secondCard.classList.remove('unmatch')
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');

    
    resetBoard();
   }, 1500);
}

function resetBoard(){
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}



(function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 16);
     card.style.order = ramdomPos;
   });
 })();


cards.forEach(card => card.addEventListener('click', showCard ));

 



