const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops=[]
var engine,world
var background,back_ground

var maxsnow=100
function preload(){

  back_ground=loadImage("snow1.jpg")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1600,600);
  
 if(frameCount %150===0){
for(var i=0;i<maxsnow;i++){
drops.push(new Snow(random(0,400),random(0,400)))
}


 }
}

function draw() {
 Engine.update(engine)
 background(0)
 
for(var i=0;i<maxsnow;i++){
drops[i].showsnew()
drops[i].updateY()

}
  drawSprites();
 
}