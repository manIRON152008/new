
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function preload(){
	backgroundImg = loadImage("download (1)");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bob = new Bob(100,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("download (1)");
  
bob.display();
 
}



