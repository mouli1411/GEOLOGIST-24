
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(700,height,1500,20);
  rubberBall = new Rubber(750,650,30);
  hammer = new Hammer(400,350,width,height);
  stone = new Stone(400,350,70,70);
  sand = new Sand(300,300,5);
  sand1 = new Sand(310,300,5);
  sand2 = new Sand(320,300,5);
  sand3 = new Sand(330,300,5);
  sand4 = new Sand(340,300,5);
  sand5= new Sand(350,300,5);
  sand6 = new Sand(360,300,5);
  sand7 = new Sand(370,300,5);
  iron = new Iron(200,200,40,30)
  Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  rubberBall.display();
  hammer.display();
  stone.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron.display();
  drawSprites();
 
}



