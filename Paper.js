class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,500,20,options);
        this.width =33;
        this.image = loadImage("Images/cpaper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
     console.log("testing")
        imageMode(CENTER);
       //rect(pos.x,pos.y,50,100)
        image(this.image,0,0,33,33);
        pop ()
    }
}