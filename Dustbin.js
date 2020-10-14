class Dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width
        
        World.add(world,this.body);

    }
}