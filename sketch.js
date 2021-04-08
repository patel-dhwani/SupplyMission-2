var ground, helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var zombieImage1;
var zombieImage2;
var zombieSprite1;
var zombieSprite2;
var packageBody; 
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

helicopterIMG=loadImage("helicopter.png");

zombieImage2=loadImage("Zombie left.png");

zombieImage1=loadImage("zombie right.png");

packageIMG=loadImage("package.png");

}

function setup() {

// creatig canvas 
createCanvas(800, 700);



rectMode(CENTER);




groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(44,235,6)



// the rectangles
rect1=createSprite(width/2,650, 200, 20);
rect1.shapeColor = "red";



// the rectangles
rect2=createSprite(width/2.7,610, 20, 100);
rect2.shapeColor = "red";


// the rectangles
rect3=createSprite(width/1.6,610, 20, 100);
rect3.shapeColor = "red";




// package
packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2




// creating chopper
helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6




// creatig zombie
zombieSprite1=createSprite(600,height-107,10,10);
zombieSprite1.addImage(zombieImage1)
zombieSprite1.scale=0.2;



// creating zombie
zombieSprite2=createSprite(200,height-107,10,10);
zombieSprite2.addImage(zombieImage2)
zombieSprite2.scale=0.11;


// creating engine
engine = Engine.create();

world = engine.world;



//Create a Ground for the package
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);



// creating the package and bouncing it
packageBody = Bodies.circle(width/2 , 200 , 23 , {restitution: 0.4, isStatic:true});
World.add(world, packageBody);



// uning the engine
Engine.run(engine);


}



function draw() {  

// background colour
background("black");


// creating the package behind the chopper
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 

// text
fill("cyan");
textSize(25);
text("Pess CTRL + R TO Reset!",width/2,100);



// draws all sprites
drawSprites(); 




// displays all rect
rect1.display();

}

function keyPressed() {


if (keyCode === DOWN_ARROW) {

// the down arrw key pressed package falls 

Body.setStatic(packageBody, false);

}
}

