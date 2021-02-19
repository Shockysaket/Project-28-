class SlingShot{
    constructor(boy, stone){
        var options = {
            // first name is heading we cannot change that (eg:bodyA:Bird.body)
            bodyA: boy,
            pointB: stone,
            stiffness: 0.04,
            length: 10
        }
        this.sling= Constraint.create(options);
        this.pointB = pointB ;
        World.add(world, this.sling);
        Slingshot = this.sling ;
    }
         
    display(){
        if (this.sling.boy) {
        var pointA = this.sling.boy.position;
        var pointB = this.stone;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}
    
fly () {
    this.sling.boy= null ; 

}


}