class slingshot {
    constructor(bodyA,bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 8,
            stiffness : 0.05
        }
        this.slingshot = Matter.Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display() {
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}