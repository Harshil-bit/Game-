class Ground  {
constructor (x,y,width,height,angle,choice) {
var options = {
    isStatic : true,
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
Matter.Body.setAngle(this.body, angle);

if (choice===1) {
    this.image=loadImage("land.png");

}

else{
    this.image=loadImage("base.png");

}

World.add(world,this.body);
}


display() {

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

}
}



