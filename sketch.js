
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

	//Create the Bodies Here.
	
	
	var mango1 = new Mango(350,100,10,10);
	var mango2 = new Mango(355,100,10,10);
	var mango3 = new Mango(401,100,10,10);
	var mango4 = new Mango (350,90,10,10);
	var mango5 = new Mango (401,90,10,10);
	var tree = new Tree (375,140);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	tree.display();
    detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	detectCollision(stoneObj,mango4);
	detectCollision(stoneObj,mango5);
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(stone,mango){
mangoBodyPosition=mango.body.setPosition;
stonebodyPosition=stone1.bodyPosition;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition, mangoBodyPosition.y)
if(distance<-mango.r+stone.r){
	Matter.body.setStatic(mango.body,false);
}
}



