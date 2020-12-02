const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,ground,ground_options,ball,ball_options;
function setup() {

  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
   ground_options = {
    isStatic: true
  }
ball_options = {
  restitution:1
}
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  ball = Bodies.circle(100,200,40,ball_options);

  World.add(myworld,ground);
  World.add(myworld,ball);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background("black"); 
  rectMode(CENTER); 
  Engine.update(myengine);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);
}