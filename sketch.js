var seaImage;
var sea; 
var ship, shipAnimation;
var invisibleGround;
var edges;
function preload(){
  seaAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
} 

function setup(){
  createCanvas(600,600);
  
  sea = createSprite(200,200,400,20)
  sea.addImage(seaImage)
  sea.scale = 0.5

  ship = createSprite(200,160,20,50);
  ship.addAnimation("sailing", seaAnimation );
  ship.scale = 0.3
  edges = createEdgeSprites();  
  
}


function draw(){
  
  background("white");
  
  sea.velocityX = -2    
  if(sea.x < 0) {
    sea.x = sea.width/2 
 }
  
  drawSprites();
}