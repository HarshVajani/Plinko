function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles = [];
var plinlos =[];
var divisions = [];

var divisionHeight = 300;

function draw() {
  background(255,255,255);  
  drawSprites();
}