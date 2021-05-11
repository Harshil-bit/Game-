const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ball, ballImg;

function preload() {
  ballImg.loadImage("ball.png");
}

function setup() {
createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
  



obstacles = [];

ground=new Ground(600,380+10,1200,30,0,0);
ground2= new Ground(600,10,500,30,0,0);
ground3= new Ground(0,200,20,400,0,0);
ground4= new Ground(1200,200,20,400,0,0);

cup= new Cup (1160,330,30,60);
cup2= new Cup (1080,330,30,60);
cup3 = new Cup(1120,360,100,30);

ballImg.addImage(ballImg,"ball");
ball.x= 250;
ball.y=100;
ball.width=7;
ball.height=7;
ball.scale(0.5);

 
for(var x = 200; x < 1100; x+=100){
    if(x >= 500 && x <= 700){
      obstacle = new Ground(x, 400, 100, random(50, 200), 0, 1);
    }else{
      obstacle = new Ground(x, 400, 100, random(150, 400), 0, 1);
    }
    obstacle2 = new Ground(x, 0, 100, random(100, 200), 180, 1);
    obstacles.push(obstacle);
    obstacles.push(obstacle2);
  }
}

function draw() {
  background(0);
  Engine.update(engine)  ;
  ground.display();
ground2.display();
ground3.display();
ground4.display();

cup.display();
cup2.display();
cup3.display();
ball.display();

for(var x = 0; x < obstacles.length; x++)
{ obstacles[x].display();
 }

 
}