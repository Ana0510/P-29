const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wallR, wallL;
var jointLink;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wallR = new Base(80, height-100, 200, 100);
  wallL = new Base(width-80, height-100, 200, 100)
}

function draw() {
  background(51);
  Engine.update(engine);

  wallR.display();
  wallL.display();

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint)
}
