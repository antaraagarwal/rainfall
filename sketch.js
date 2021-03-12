const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var drops=[]
var maxDrops=100
var umbrella


function preload(){
    
}

function setup(){
    createCanvas(400,650); 
    engine = Engine.create();
    world = engine.world;

    umbrellaMan =new Umbrella(250,500)

    
    for(var i=0;i<maxDrops;i++){
       drops.push(new createDrop(random(0,400), random(0,400)))
    }

    
}

function draw(){
    background(0,0,0);
    Engine.update(engine); 
    umbrellaMan.display()

}   

