var bg, iss;
var spaceCraft;
var spaceCraftimg;
var spaceCraftimg2;
var dock;
var gameState;
var play = 1
var End = 0
var gameState = play;
var sound;



function preload() {
  bg = loadImage("bg.jpg");
  iss = loadImage("iss.png");
  spaceCraftimg = loadAnimation("spaceCraft1.png", "spaceCraft2.png", "spaceCraft3.png", "spaceCraft4.png")
  spaceCraftimg2 = loadAnimation("spaceCraft1.png");
  sound=loadSound("sound.mp3")
}

function setup() {
  createCanvas(windowWidth - 500, windowHeight - 100);

  spaceCraft = createSprite(450, 350);
  spaceCraft.addImage(iss)
  spaceCraft.scale = 1.2
  spaceCraft.setCollider("circle", -63, 25, 10)
  // spaceCraft.debug=true

  dock = createSprite(450, 750, 50, 50)
  dock.addAnimation("dock", spaceCraftimg)
  dock.scale = 0.3
  dock.setCollider("rectangle", 0, -100, 125, 400);
  // dock.debug=true

  dock.depth=spaceCraft.depth;
  spaceCraft.depth=spaceCraft.depth+1;

}
function draw() {
  background(bg);
  if (gameState === play) {
    readMovement();
    if (dock.isTouching(spaceCraft)) {
      console.log("touch")

      gameState = End;

    }
  }
  if (gameState === End) {
    console.log("gameState===End")

    fill("white")
    textSize(50);
    stroke("yellow")
    text("DOCKING SUCCEFULLY!", 600, 800)

    dock.addAnimation("dock",spaceCraftimg2);
    dock.velocityX=3
    dock.y=450
    
    loop=false;
    spaceCraft.velocityX=3;
  }
  
  drawSprites();
}


function readMovement() {
  if (keyDown("up")) {
    dock.y = dock.y - 5
  }
  if (keyDown("down")) {
    dock.y = dock.y + 5
  }
  if (keyDown("right")) {
    dock.x = dock.x + 5
  }
  if (keyDown("left")) {
    dock.x = dock.x - 5
  }

}
