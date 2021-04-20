const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var plane;
 var stone;
 var hammer;
 var iron;
 var sand1, sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
 var rubber;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  plane = new Plane(500,590,1000,10);
  stone = new Stone(700,300,100,100);
  hammer = new Hammer(10,100);
  iron = new Iron(350,300,70,40);
  rubber = new Rubber(900,450,70);

  sand1 = new Sand(500,400,10);
  sand2 = new Sand(505,400,10);
  sand3 = new Sand(510,400,10);
  sand4 = new Sand(515,400,10);
  sand5 = new Sand(520,400,10);
  sand6 = new Sand(525,400,10);
  sand7 = new Sand(525,400,10);
  sand8 = new Sand(525,400,10);
  sand9 = new Sand(525,400,10);
  sand10 = new Sand(525,400,10);
  
  Engine.run(engine);

  
}


function draw() {
  background("skyblue");

  
  plane.display();
  stone.display();
  hammer.display();
  iron.display();
  rubber.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();


}



