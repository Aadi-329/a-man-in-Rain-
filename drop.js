class Drop{

    constructor(x,y){

        this.body=Bodies.circle(x,y,10,{isStatic:false,density:0.1,friction:0.1,restitution:0.1})
    

World.add(world,this.body)




    }

    display(){

        ellipseMode(CENTER)


        ellipse(this.body.position.x,this.body.position.y,10);


       // console.log( this.body)



    }





}