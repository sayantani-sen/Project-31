class Plinko {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}