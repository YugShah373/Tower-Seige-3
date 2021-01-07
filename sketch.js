const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = atter.Bodies;M
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var standLeg, stand;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var polygonObj;
var slingShot;
var score;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(1200, 400, 1200, 50);
    standLeg = new Ground(1200, 350, 70, 20);
    stand = new Ground(1200, 280, 90, 20);
    block1 = new Box(330, 235, 30, 40);
    block2 = new Box(360, 235, 30, 40);
    block3 = new Box(390, 235, 30, 40);
    block4 = new Box(420, 235, 30, 40);
    block5 = new Box(450, 235, 30, 40);
    block6 = new Box(360, 195, 30, 40);
    block7 = new Box(390, 195, 30, 40);
    block8 = new Box(420, 195, 30, 40);
    block9 = new Box(390, 155, 30, 40);
    polygonObj = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingShot = new SlingShot(this.polygon, {x:100, y:200});

   
}

function draw(){
    text("SCORE:"+score, 750, 40);
    keyPressed();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
}
function keyPressed(){
    if(keyCode==32){
        slingShot.attach(this.polygon);
    }
}