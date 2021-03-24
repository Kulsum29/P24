class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x , y , 22 , options);
        this.radius=22;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill("mediumpurple")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}