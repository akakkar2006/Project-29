class Stone{
    constructor(x,y,width,height){
    var options ={
        isStatic:false,
        restituion:0,
        friction:1,
        density:1.2
    }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Plucking mangoes/stone.png");
        World.add(World,this.body);
    }
    display(){
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)  
    }
}