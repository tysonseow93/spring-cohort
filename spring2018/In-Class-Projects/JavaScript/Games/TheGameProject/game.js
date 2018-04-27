//this is the games engine

var canvas;
var blueFill = "#8be4fd";
var renderingContext;
var width = 917;
var height = 529;
var frames = 0;
var myHero;
var myHeroBlink;
var myHeroWalk;
let myWallet;
var currentState;

var states = {
    splash: 0,
    Game: 1,
    Score: 2
};

function main() {

    canvasSetup();
    windowSetup();

    document.getElementById("canvasBox").appendChild(canvas);

    myHero = new Hero(60, 90);

    myHeroBlink = new Hero(400, 90);

    myHeroWalk = new Hero(300, 90);

    myWallet = new Wallet();

    loadGraphics();

    //currentState = states.Game;

    levelStart(0);

}

function windowSetup() {
    document.addEventListener("keydown", myKeyPress);
    document.addEventListener("keyup", removeMotion);
}

function removeMotion() {
    myHero.direction = "";
}

function myKeyPress(evt) {
    switch(evt.keyCode){
        case 32:
            myHero.jump();
            break;
        case 37:
            //move left
            myHero.direction ="left";
            break;
        case 39:
            //move right
            myHero.direction = "right";
            break;
        case 38:
            //move up
            myHero.direction = "up";
            break;
        case 40:
            myHero.direction = "down";
    }
}

function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.style.border = "2px solid black";

    canvas.width = width;
    canvas.height= height;

    renderingContext = canvas.getContext("2d");
}

function Hero(x, y) {
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.gravity = .25;
    this.velocity = 0;
    this._jumpHeight = 6.6;
    this.jumpCount = 2;
    this.stop = false;

    this.velX = 0;
    this.velY = 0;
    this.maxSpeed = 6;
    this.friction = 0.93;
    this.direction = "";

    this.blinkAnimation = [0, 1, 2, 1];
    this.walkAnimation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    this.jump = function() {
        this.stop = false;
        if (this.jumpCount > 0){
            this.velocity = -this._jumpHeight;
            this.jumpCount --;
        }
    };

    this.update = function(){
        let n = 10;
        let b = 5;
        this.frame += frames % n === 0 ? 1:0;
        this.frame += frames % b === 0 ? 1:0;
        this.frame %= this.blinkAnimation.length;
        this.frame %= this.walkAnimation.length;

        if(currentState === status.Game){
            this.updatePlayingHero();
        }
    };
    this.updatePlayingHero = function () {

        if(this.direction === "left"){
            if(this.velX > -this.maxSpeed){
                this.velX --;
            }
        }

        if(this.direction === "right"){
            if(this.velX < this.maxSpeed){
                this.velX ++;
            }
        }

        if(this.direction === "up"){
            if(this.velY > -this.maxSpeed){
                this.velY --;
            }
        }

        if(this.direction === "down"){
            if(this.velY < this.maxSpeed){
                this.velY ++;
            }
        }

        this.velX *= this.friction;
        this.x += this.velX;

        this.velY *= this.friction;
        this.y += this.velY;

        // if(!this.stop){
        //     this.velocity += this.gravity;
        //     this.y += this.velocity;
        // }

        // if(this.y >= 350){
        //     this.land(350);
        // }

    };

    this.land = function (place) {
        this.y = place;
        this.jumpCount = 2;
        this.velocity = this._jumpHeight;
    };

    this.drawBlink = function(renderingContext){
        renderingContext.save();

        let n = this.blinkAnimation[this.frame];
        linkBlink[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore();
    };
    this.drawWalk = function (renderingContext) {

        renderingContext.save();


        let b = this.walkAnimation[this.frame];
        linkWalk[b].draw(renderingContext, this.x, this.y);

        renderingContext.restore();

    };

}

function Wallet() {
    this.collection = [];
    this.add = function(gemX, gemY) {
        this.collection.push(new RupeeGem(gemX,gemY));
    };

    this.update = function () {
        for(let g = 0; g < this.collection.length; g++){
            let loopedGem = this.collection[g];

            let gTop = loopedGem.y;
            let gLeft = loopedGem.x;
            let gRight = loopedGem.x + loopedGem.width;
            let gBottom = loopedGem.y + loopedGem.height;

            let heroTop = myHero.y;
            let heroLeft = myHero.x;
            let heroRight = myHero.x + myHero.width;
            let heroBottom = myHero.y + myHero.height;

            if((heroBottom >= gTop && heroTop <= gBottom) && (heroRight >= gLeft && heroLeft <= gRight)){
                console.log('hit detected');
                this.collection.splice(g, 1);
            }


        }
    };

    this.draw = function() {
        for(let i = 0; i < this.collection.length; i++){
            let theGem = this.collection[i];
            theGem.draw();
        }
    }

}

function RupeeGem(rupeeX, rupeeY) {
    this.x = rupeeX;
    this.y = rupeeY;
    this.width = 40;
    this.height = 77;
    this.draw = function () {
        rupee.draw(renderingContext, this.x, this.y);
    };
}

function levelStart(levelNum) {
    let gemCount = setup.levels[levelNum].gems.length;

    for(let i = 0; i < gemCount; i++){
        myWallet.add(setup.levels[levelNum].gems[i].x, setup.levels[levelNum].gems[i].y);
    }
}

function loadGraphics() {
    let img = new Image();
    img.src = "images/link.png";

    img.onload = function () {
        initSprites(img);
        // renderingContext.fillStyle = blueFill;

        gameLoop();
    };
}

function gameLoop() {
    update();
    render();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    //check status and stuff happening
    frames ++;
    myHero.update();
    myHeroBlink.update();
    myHeroWalk.update();
    myWallet.update();
}

function render() {
    // draw stuff constantly based on status
    renderingContext.fillRect( 0, 0, width, height);
    backgroundSprite.draw(renderingContext,0,0);
    myWallet.draw(renderingContext);
   // myHeroWalk.drawWalk(renderingContext, 0, 0);
    myHero.drawWalk(renderingContext);
   // myHeroBlink.drawBlink(renderingContext);
}