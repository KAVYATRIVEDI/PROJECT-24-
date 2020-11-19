
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(30,680,30);
	
	ground=new Ground(400,690,800,20);
	box1 = new Box(680,680,200,20);
	box2 = new Box(780,680,20,200);
	box3 = new Box(580,680,20,200);

	Engine.run(engine);
  
}


function draw() {

  background("white");
  keyPressed();
 paper.display();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{ x: 85,y :-85});
    }
}




