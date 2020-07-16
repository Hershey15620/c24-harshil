var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	

	dustbin3= new Dustbin(650,650,200,20);
  dustbin1= new Dustbin(760,620,20,100);
  dustbin2= new Dustbin(540,620,20,100);

  paper= new Paper(200,570);
  var render= Render.create({
	  element:document.body,
	  engine:engine,
	  options:{
		  width:400,
		  height:700
	  }
  })
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();
	keyPressed();
  
  drawSprites();
 
}
function keyPressed (){
 if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
 }

}



