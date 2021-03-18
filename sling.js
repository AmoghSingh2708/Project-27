class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:150
    
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
   display(){
       var posA = this.sling.bodyA.position;
       var posB = this.sling.pointB;
    line(posA.x,posA.y,posB.x,posB.y);
   }
}