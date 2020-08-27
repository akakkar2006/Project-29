class Tree{
    constructor(x,y){
        this.image=loadImage("plucking mangoes/tree.png");
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=this.width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        image(this.image,0,0,this.width,this.height)
    }
}