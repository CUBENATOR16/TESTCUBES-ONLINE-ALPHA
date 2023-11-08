var canvas;
var backgroundImage, bgImg;
var database, gameState;
var form, player, playerCount;
var allPlayers, cube1, cube1Img, cube2, cube2Img;
var cubes = [];

function preload() {
  backgroundImage = loadImage("./assets/branco.jpg");
  cube1Img=loadImage("./assets/blue.png");
  cube2Img=loadImage("./assets/red.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  //this.handlePlayerControls();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
