
class Square {

    constructor() {
        this.isDaBomb;
        this.isBlank;
        this.isNumber;
        this.isclicked;
        this.isflagged;
}
    toHtml(){
        var squareHtml ='<div class = "square">'

        if(this.DaBomb){
            squareHtml += 'B';
        }

    }

}

class GameBoard{

    constructor(columns, rows){
        this.numBombs =10;
        this.columns = 10;
        this.rows = 10;
        this.gameGrid = [];

        for(let row = 0; row < this.rows; row++){
            let ourNewRow = [];
            for(let col = 0 ; col < this.columns; col++){
                ourNewRow.push(new Square());
            }
            this.gameGrid.push(ourNewRow);
        }

    }

}

function getBoardHtml(gameBoard) {


    var boardHtml = '<div class="game-board" id="game-board">'

    for(let row = 0; row < gameBoard.rows; row++){
        let currRow = gameBoard[row];
        boardHtml +='<div class="grid-row">';

            for(let col = 0 ; col < gameBoard.columns; col++){
            ourNewRow.push(new Square());

            }
            this.gameGrid.push(ourNewRow);
        boardHtml += '</div>'
    }

}


var testBoard = new GameBoard();
console.log("hi");

