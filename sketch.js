var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4, cars;
var c1, c2, c3, cr4, g1, t1

function preload(){

  c1=loadImage("car1.png")
  c2=loadImage("car2.png")
  c3=loadImage("car3.png")
  c4=loadImage("car4.png")
  g1=loadImage("ground.png")
  t1=loadImage("track.jpg")

}


function setup(){
  canvas = createCanvas(displayWidth-60,displayHeight-60);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end()
  }
}
