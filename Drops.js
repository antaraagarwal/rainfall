class createDrops {
   constructor(x, y) {
     var options = {
        restitution :0.1,
        friction :0.1,
    }
    this.body = Bodies.circle(x, y, 5, width, height, options);
    this.radius= 5
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.trajectory=[]
}

    update(){
        if (this.rain.position.y > height) {
            Matter.body.setPosition(this.rain, {x:random (0,400), y:random(0,400)})
            }
    }
   
    
    display() {
    fill("blue")
    ellipseMode(ellipse)
    ellipse(this.body.position.x, this.body.position.y, this.radius)
    }
}