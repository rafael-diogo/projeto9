var cubo

function setup() {
  createCanvas(1000,600);

  cubo=createSprite(500,300,200,200)
  cubo.shapeColor="black"
}

function draw() 
{
  background("blue");

  if(keyIsDown(UP_ARROW)){
    cubo.y=cubo.y-3
    background("green");
  }


if(keyIsDown(DOWN_ARROW)){
  cubo.y=cubo.y +3
  background("purple");
}


if(keyIsDown(RIGHT_ARROW)){
  cubo.x=cubo.x+3
  background("red");
}


if(keyIsDown(LEFT_ARROW)){
  cubo.x=cubo.x-3
  background("yellow");
}
drawSprites()
}

