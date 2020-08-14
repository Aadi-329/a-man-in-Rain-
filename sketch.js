
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop=[]
var boy
var thunder1=[],thunder2,thunder3,thunder4,thunder


function preload(){

   thunder1[0] = loadImage("1.png") 
   thunder1[1] = loadImage("2.png")  
   thunder1[2] = loadImage("3.png")  
   thunder1[3] = loadImage("4.png")  



    
}

function setup(){

   

    createCanvas(500,500)
   

    engine = Engine.create();
    world = engine.world;

 boy=new Umb(250,400,100,180)
boy.addAnimation
    for (var index = 0; index < 50; index++) {
       
        fill("blue")      
        drop.push(new Drop(random(0,500),random(-1000,0)))
        
        
        
    
}





 
   thunder=createSprite(250,30,100,100)
   thunder.visible=false
 
   thunder.scale=0.5
   
     
  

    
}

function draw(){

    background("black")
    Engine.update(engine);

  

    for (var index = 0; index < drop.length; index++){ 

        if(drop[index].body.position.y>500 && drop[index].body.position.y<600){
    
            Matter.Body.setPosition( drop[index].body, {x: random(0,500) , y: -100})
    
           
            
            
            
    
        }
        
        //console.log( drop[index].body.position)
    

    
    
     }

    

   if(frameCount%100===0){
        
        
    thunder.visible=true
   var i= Math.round(random(0,3))
  
   thunder.x=random(50,500)
    thunder.addImage("img",thunder1[i])


   }else if(frameCount%112===0){

    thunder.visible=false



   }
    

   
    


    for (var index = 0; index < drop.length; index++){
   drop[index].display()
}
     
boy.display()

drawSprites()

    
}   

