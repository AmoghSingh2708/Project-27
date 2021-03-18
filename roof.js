class Roof{
    constructor(x,y,width,height){
        var options = {
            'isStatic':true,	
            'restitution':0,
            'friction':3,
            'density':2   
        }
        this.body = Bodies.rectangle(x,y,250,30,options);
        this.width = 250;
        this.height = 30;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("grey");
        rect(0,0,this.width,this.height);
        pop();

    }
}