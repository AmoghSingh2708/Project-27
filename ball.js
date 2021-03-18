class Ball{
    constructor(x,y,radius){
        var options = {
            	
            'restitution':1.5,
            'friction':3,
            'density':10
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 50;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0,0,50,50);
        pop();
    }
}