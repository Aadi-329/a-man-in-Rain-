class Umb{
constructor(x,y,w,h){

    this.boyss=Bodies.rectangle(x,y,w,h,{isStatic:true})

    this.hi=h
    this.animation=loadImage("walking_1.png")


    World.add(world,this.boyss)

}

display(){

 imageMode(CENTER)


   this.image= image(this.animation,this.boyss.position.x,this.boyss.position.y,250,250)
     


}


}