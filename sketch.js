var canvas;
var music;

function preload() {
  music = loadSound("music.mp3");
}


function setup() {
  canvas = createCanvas(800, 600);

  //create 4 different surfaces
  surface1 = createSprite(750, 575, 200, 40);
  surface2 = createSprite(515, 575, 230, 40);
  surface3 = createSprite(265, 575, 230, 40);
  surface4 = createSprite(70, 575, 130, 40);

  boundary1 = createSprite(800, 500, 0, 1000);
  boundary1.visible = false;
  boundary2 = createSprite(20, 500, 0, 1000)
  boundary2.visible = false;

  boundary3 = createSprite(500, 5, 1000, 10)
  boundary3.visible = false;


  surface1.shapeColor = "green";
  surface2.shapeColor = "pink";
  surface3.shapeColor = "orange";
  surface4.shapeColor = "blue";
  //create box sprite and give velocity
  box = createSprite(275, 500, 50, 50);
  box.scale = 0.7
  
  box.velocityX = -10;
  box.velocityY = 10;



}

function draw() {
  background(rgb(169, 169, 169));

  //create edgeSprite
  createEdgeSprites();

  //box.bounceOff(topEdge);
  // box.bounceOff(bottomEdge);
  //  box.bounceOff(surface1);
  // box.bounceOff(surface2);
  //  box.bounceOff(surface3);
  //  box.bounceOff(surface4);
   box.bounceOff(boundary1);
   box.bounceOff(boundary2);
   box.bounceOff(boundary3);



  
if(surface1.isTouching(box)   &&  box.bounceOff(surface1)) {
  box.shapeColor="green"
  box.velocityX=-10;
  music.play();
}

if(surface2.isTouching(box)   &&  box.bounceOff(surface2)) {
  box.shapeColor="pink"
  music.stop();
  box.velocityX=0;
  
  box.velocityY=0;
  
  
}

if(surface3.isTouching(box)   &&  box.bounceOff(surface3)) {
  box.shapeColor="yellow"
}

if(surface4.isTouching(box)   &&  box.bounceOff(surface4)) {
  box.shapeColor="blue"
}








  //add condition to check if box touching surface and make it box
  

   
  drawSprites();
}



