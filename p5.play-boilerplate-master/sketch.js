const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine , world , ground , ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,option);
  World.add(world, ground);
  var optionC={
    restitution:0.5
  }
  ball=Bodies.circle(50,50,15,optionC);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("yellow");
  rect (ground.position.x, ground.position.y,400,20)
  ellipseMode(RADIUS);
  fill("red");
  ellipse (ball.position.x,ball.position.y,15) 
}