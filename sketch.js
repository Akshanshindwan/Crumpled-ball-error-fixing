const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground; 
var paper;
var base;
var leftside;
var rightside;
var launcher;

function preload(){

  

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
        ground = new Ground(10,690,1600,20);
		    paper = new Paper(50,100,50);
        base = new Log(500,670,150,20,PI);
        leftside = new Log(420,645,20,70,PI);
        rightside = new Log(565,645,20,70,PI);

        launcher = new Launcher(paper.body, );

     
    Engine.run(engine);
  
}


function draw() {
background("white");
  
  ground.display();
  paper.display();
  base.display();
  leftside.display();
  rightside.display();
  drawSprites();
 
}
function keyPressed(){

  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300})
  }
}