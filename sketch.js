
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2 , mango3 , mango4 , mango5,mango6 ;
var mango7 , mango8,mango9 ,mango10;
var world,boy; 
var stone ,slingShot ;

function preload(){
	boy=loadImage("images/boy.png");
	stone = loadImage ("images/stone.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango (1333,270,30)
	mango3 = new mango (1245,200,30)
	mango4= new mango(1234,190,30)
	mango5 = new mango (1230,120,30)
	mango6= new mango (1000,123,30)
	mango7= new mango (970,123,30)
	mango8= new mango (1500,123,30)
	mango9= new mango (900,123,30)
	mango10= new mango (1111,200,30)

	stone = createSprite (225,380,30,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	slingShot = new SlingShot(boy.body,{x:200,y:100})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();

  stone.display();

}
function mouseDragged() {
    Matter. Body. setPosition (boy.body, {x:mouseX,y:mouseY})

}

function mouseReleased(){
    slingShot.fly();
    
}