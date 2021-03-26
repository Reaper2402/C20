var fixRect,movingRect;



function setup() {
  createCanvas(1200,800);
 fixRect = createSprite(200, 200, 50, 80);
 fixRect.shapeColor ="red";
 fixRect.debug=true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="red";
  movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixRect.x);
  if (movingRect.x-fixRect.x<fixRect.width/2+movingRect.width/2
    && fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2
    && fixRect.y-movingRect.y<fixRect.height/2+movingRect.height/2
    && movingRect.y-fixRect.y<fixRect.height/2+movingRect.height/2){
    fixRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  else{
    fixRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  //if(movingRect.isTouching(fixRect)) {}
  drawSprites();
}