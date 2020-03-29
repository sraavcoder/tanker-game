

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine,world;
var ground,base,base2,ball,front;

function setup() {
 createCanvas(800,500);  
 engine = Engine.create();
 world = engine.world; 

 ground = new Ground(400,510,1000,30);
 base = new Base(120,450,190,80);
 base2 = new Base(80,385,120,50);
 ball = new Back(150,385,30);
 front = new Front(250,450,100,PI/2);

}

function draw() {
background(225);
Engine.update(engine);

ground.display();
base.display();
base2.display();
ball.display();
front.display();
//drawSprites();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}