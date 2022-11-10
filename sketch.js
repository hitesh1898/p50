var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")
jumpSound=loadSound("assets/jump.mp3")
balloonImg = loadAnimation("assets/hot air ballon.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.4;



}

function draw() {
  
  background("black");
 
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -2 ;
            jumpSound.play()
            
          }

          //adding gravity
          balloon.velocityY = balloon.velocityY+2;
   
        drawSprites();
        
}
