
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(260,200,50)
	ball2 = new Ball(310,200,50)
	ball3 = new Ball(360,200,50)
	ball4 = new Ball(410,200,50)
	ball5 = new Ball(460,200,50)
	roof = new Roof(355,100);
	sling1 = new Sling(ball1.body,{x:260,y:100});
	sling2 = new Sling(ball2.body,{x:310,y:100});
	sling3 = new Sling(ball3.body,{x:360,y:100});
	sling4 = new Sling(ball4.body,{x:410,y:100});
	sling5 = new Sling(ball5.body,{x:460,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}