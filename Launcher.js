class Launcher{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length: 10,
            stiffness: 0.04
            
        }

        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
      }
      display(){
        
        var pointA = this.Launcher.bodyA.position
        var pointB = this.Launcher.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
}