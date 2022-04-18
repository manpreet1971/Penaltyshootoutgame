class Target
{
  constructor(x, y,r) 
  {
    var options = {
      isStatic: true
      };
    this.r = r;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("target.png");
    World.add(world, this.body);
    console.log("ball function called");
  }

  display() 
  {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

  
  }
}