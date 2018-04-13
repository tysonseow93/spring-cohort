

// blackjack game by Tyson Seow


let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
let cardValues = ["Ace", "King", "Queen", "Jack", 10, 9, 8, 7, 6, 5, 4, 3, 2];

let textArea = document.getElementById("text-area");
let newGameBtn = document.getElementById("new-game-btn");
let hitBtn = document.getElementById("hit-btn");
let stayBtn = document.getElementById("stay-btn");

// game variables

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();

newGameBtn.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playersCard = [getNextCard(), getNextCard()];

    newGameBtn.style.display = 'none';
    hitBtn.style.display = 'inline';
    stayBtn.style.display = 'inline';
    showStatus();
});


function createDeck(){
    let deck = [];
    deck = [];

        for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx = 0; valueIdx < cardValues.length; valueIdx++){
            // deck.push(cardValues[valueIdx] + " of " + suits[suitIdx]);
            let card = {
                suit: suits[suitIdx],
                value: cardValues[valueIdx]
            };
            deck.push(card);
        }

    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++){
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}


function getNextCard(){
    return deck.shift();
}

function getCardString( card ) {
    return card.value + " of " + card.suit;
}

function showStatus() {
    if(!gameStarted){
        textArea.innerText = "Welcome to Blackjack!";
        return;
    }

    for(let i = 0; i < deck.length; i++){
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}

let playersCard = [getNextCard(), getNextCard()];



