const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var polygon_img,sling,backgroundImg;
var score = 0;

function preload(){
  getBackgroundImg();
}

function setup(){
  var canvas = createCanvas(1300,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,height,1300,20);
  ground2 = new Ground(960,190,200,20);
  //ground level
  block1 = new Box(600,390,30,30);
  block2 = new Box(630,390,30,30);
  block3 = new Box(660,390,30,30);
  block4 = new Box(690,390,30,30);
  block5 = new Box(720,390,30,30);
  block6 = new Box(750,390,30,30);
  block7 = new Box(780,390,30,30);
  //first level
  block8 = new Box(630,360,30,30);
  block9 = new Box(660,360,30,30);
  block10 = new Box(690,360,30,30);
  block11 = new Box(720,360,30,30);
  block12 = new Box(750,360,30,30);
  //second level
  block13 = new Box(660,330,30,30);
  block14 = new Box(690,330,30,30);
  block15 = new Box(720,330,30,30);
  //third level
  block16 = new Box(690,300,30,30);

  //second ground
  //ground level
  block17 = new Box(900,170,30,30);
  block18 = new Box(930,170,30,30);
  block19 = new Box(960,170,30,30);
  block20 = new Box(990,170,30,30);
  block21 = new Box(1020,170,30,30);
  //first level
  block22 = new Box(930,140,30,30);
  block23 = new Box(960,140,30,30);
  block24 = new Box(990,140,30,30);
  //second level
  block25 = new Box(960,110,30,30);

  polygon = new Polygon(100,150,10);

  launch = new Launcher(polygon.body,{x:100,y:150});
  
}

function draw(){
  rectMode(CENTER);
  if(backgroundImg)
    background(backgroundImg);
  Engine.update(engine);
  
  noStroke();
    textSize(35);
    fill("red");
    text("SCORE:" + score,750,40);

 ground1.display();
 ground2.display();

 block1.display();
 block1.score();
 block2.display();
 block2.score();
 block3.display();
 block3.score();
 block4.display();
 block4.score();
 block5.display();
 block5.score();
 block6.display();
 block6.score();
 block7.display();
 block7.score();
 block8.display();
 block8.score();
 block9.display();
 block9.score();
 block10.display();
 block10.score();
 block11.display();
 block11.score();
 block12.display();
 block12.score();
 block13.display();
 block13.score();
 block14.display();
 block14.score();
 block15.display();
 block15.score();
block16.display();
block16.score();
block17.display();
block17.score();
block18.display();
block18.score();
block19.display();
block19.score();
block20.display();
block20.score();
block21.display();
block21.score();
block22.display();
block22.score();
block23.display();
block23.score();
block24.display();
block24.score();
block25.display();
block25.score();
launch.display();    
polygon.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launch.fly()
}

function keyPressed(){
  if(keyCode === 32){
      launch.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/asia/tokyo");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour >= 06&&hour<=19){
      bg = "Yellow.png";
  }
  else{
      bg = "Black.jpg";
  }
  backgroundImg = loadImage(bg);
}


