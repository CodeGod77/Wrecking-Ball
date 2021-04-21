class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.pointB = pointB
        World.add(world, this.rope);
    }
 attach(body){
    this.sling.bodyA = body;
}
 fly(){
    this.sling.bodyA = null;
}

}
