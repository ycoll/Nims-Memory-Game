# Nims Memory Game

This is my second Milestone project for the 'Interactive Frontend Development' module with the Code Institute.

The main feature of this website is a simple, card matching memory game. There is also fully a functioning contact form. The game is designed to be both simple and enjoyable to play. It is inspired by a matching game I played as a child. 
 
## UX
 
My main goals when designing this website was to create something simple to play, visually appealing and suitable for all ages. The game is both desktop and mobile friendly and looks/plays very similar on both.
There is a moves counter to track amount of cards clicked and a simple restart button, this allows the game to be played by a wide range of ages as it is so easy to play.
I added a form as a way for players to get in touch and report any problems with the game.

The design is meant to be fun and add a retro feel to the site.

The game is suitable for ages aproximately 5+ as it is very easy to play. 


- As a player, I can easily navigate through this website, read the instructions and play the game. I can see how I'm doing in the game based on amount of moves I've made and restart to beat my score. If I have a question/problem I can contact the creator using a simple form.

I have included my plans for this website in a seperate 'wireframes' directory. These are some basic hand drawn plans.


## How To Play
Click on a card to reveal the icon, try to find the matching icon. Match all pairs to win. Click on restart button to beat your moves score. 

## Features

 ### Existing Features
- Collapsed navbar: Allows the user to access different sections easily and stays collapsed for a minimal look.
- Moves Counter: This counts everytime a card is clicked and allows the player to track their progress.
- Reset button: Allows the player to restart the game at any stage. 
- Contact Form: This form enables the player to contact me with any questions or issues.


### Features Left to Implement
- A high score chart: That would enable the player to see their highest score.


## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Bootstrap](https://getbootstrap.com)
  - I used bootstrap mainly to make my site responsive and for the layout of my game.


## Testing
### Manual Testing

All tests were run manually for this website and game.

1. Game:
    1. Go to the "Lets Play!" section
    2. Click on a card, verify it turns and displays icon.
    3. Click on another card, verify: If it is a match 2 cards turn green and stay flipped, If it is not a match 2 cards turn red and flip back around.
    4. Try to click on a card when two are turned, verify only 2 can be flipped at a time, verify Moves counter only changes when a card is successfully flipped.
    5. Try to click on a card that has been previously clicked, verify the card can be clicked again.
    6. Click on reset button, verify that all cards are flipped back around and shuffled, verify that moves counter is reset.

-I found a few bugs whilst developing this game. 
        -I found that once a card was clicked it couldn't be clicked again.
        -With the counter, I found that if you clicked a card even if it didn't flip, the counter went up.
        -I found that the cards weren't shuffling when the reset button was clicked.
        -I have since fixed all these bugs and it is now running smoothly. 

1. Contact me form:
    1. Go to the "Contact Me!" section
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that the message goes through.

-I found a few bugs whilst developing the form.
       -When the form was submitted the whole page refreshed.
       -When the form was submitted the text in the inputs did not clear.
       -I have fixed these problems and the form now submits a message to my email address and clears once the submit button has been clicked.


I have tested the site and game on various screen sizes and browsers and found it to be fully responsive.


## Deployment

This project is hosted on GitHub pages here ()


## Credits

### Acknowledgements

- I received inspiration for this project from https://marina-ferreira.github.io/tutorials/js/memory-game/ and https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
