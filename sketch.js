var tomimg1,tomimg2,jerryimg1,jerryimg2,bg

function preload() {
   bg=loadImage("images/garden.png")
   tomimg1=loadImage("images/cat1.png")
   tomimg2=loadImage("images/cat2.png","images/cat3.png")
   tomimg3=loadImage("images/cat4.png")
     
   jerryimg1=loadImage("images/mouse1.png")
   jerryimg2=loadImage("images/mouse2.png","images/mouse3.png")
   jerryimg3=loadImage("images/mouse4.png")





}

function setup(){
    createCanvas(1000,800);
   
    tom=createSprite(870,600)
    tom.addAnimation("sleeping",tomimg1)
    tom.scale=0.2
   
    jerry =createSprite(200,600)
    jerry.addAnimation("standing",jerryimg1)
    jerry.scale=0.15
}

function draw() {

    background(bg);
    
    if(tom.x-jerry.x<(tom.width-jerry.width/2)){
        tom.velocityX=0
        tom.addAnimation("tomlastimg",tomimg3)
        tom.x=300
        tom.scale=0.2
        
        jerry.addAnimation("jerrylastimg",jerryimg3)
        jerry.scale=0.15
        
        tom.changeAnimation("tomlastimg")
        jerry.changeAnimation("jerrylastimg")

    }

    drawSprites();
    keyPressed()
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("running",tomimg2)
    tom.changeAnimation("running")
    
    jerry.addAnimation("teasing",jerryimg2)
    jerry.frameDelay=25
    jerry.changeAnimation("teasing")
  }


}
