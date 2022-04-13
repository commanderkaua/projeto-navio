var ship;
var ship_animation;
var sea;
var sea_animation;
function preload(){
ship_animation = loadAnimation("ship-3.png","ship-4.png");
sea_animation = loadAnimation("sea.png");
}

function setup(){
  createCanvas(900,550);
  sea = createSprite(0,0,900,250);
  sea.addAnimation("mar", sea_animation);
 ship = createSprite(150,300,50,70);
 ship.addAnimation("navio", ship_animation);
  ship.scale = 0.2; 
  sea.scale = 1.0; 
}

function draw() {
  background("blue");
    drawSprites(); 
}
if (keyDown("up")){
  ship.velocityY = 5;
}
ship.velocityY = ship.velocityY+ 5
