function preload(){
  thorAnimation = loadAnimation("Thor1.png","Thor2.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  thor=createSprite(windowWidth/2, windowHeight/2, 50, 50);
  thor.addAnimation("running",thorAnimation)
}

function draw() {
  background(255,255,255); 
  
  
  drawSprites();
}