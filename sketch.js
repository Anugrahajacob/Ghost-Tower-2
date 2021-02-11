var tower ,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climberGroup;
var ghost,ghostImage;
var invisible , invisibleGroup
var gameState= "play"

function preload(){
  towerImage = loadImage("tower.png")
  doorImage = loadImage("door.png")
  climberImage=loadImage("climber.png")
   ghostImage = loadImage("ghost-standing.png")
}
                  
                  

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
   tower.velocityY=3;

  doorsGroup= new Group();
  climberGroup= new Group();
  invisibleGroup= new Group();
  
  ghost=createSprite(350,300);
  ghost.addImage(ghostImage);
  ghost.scale=0.4;
  
}


function draw(){
  background(0);
  
  if(gameState==="play"){
  
 if(tower.y>400){
   tower.y=300;
 }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  
   if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-3;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  SpawnDoors();
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
  if(invisibleGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end"
  }
  
  }
  
  if(gameState==="end"){
    fill("yellow")
    text("Game Over",300,300);
  }
  
  
  
  
  
  
  
  
drawSprites();
  
  
  
  
  
  
}


function SpawnDoors(){
  
  if(frameCount%200===0 ){
     door=createSprite(Math.round(random(100,500)),-60);
    door.addImage(doorImage);
    door.velocityY=3;
    door.lifetime=200;
    doorsGroup.add(door);
    climber=createSprite(200,10);
    climber.addImage(climberImage);
    climber.x=door.x;
    climber.velocityY=3;
    climber.lifetime=200;
    climberGroup.add(climber);
    ghost.depth=door.depth;
    ghost.depth+=1;
    invisible=createSprite(200,15);
    invisible.width=climber.width;
    invisible.height=2;
    invisible.x= door.x;
    invisible.velocityY=3;
    invisibleGroup.add(invisible);
  }
 
  
  
  
}





