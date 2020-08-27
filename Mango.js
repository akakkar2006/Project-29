
class Mango{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Plucking mangoes/mango.png");
        this.world.add(World,this.body);
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)  
    }
}