class Ball 
{
  constructor(x, y,r) 
  {
    var options = {
      isStatic: false
      };
    this.r = r;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("football.png");
    World.add(world, this.body);
    console.log("ball function called");
  }
  //Shoot the ball
  shootBall(key,angle)
  { 
   switch(key) 
    {
     case 65:var velocity = p5.Vector.fromAngle((angle-90)+0.48);//fixed
             console.log("a key pressed");
             velocity.mult(1.0);
             Matter.Body.setStatic(this.body, false);
             Matter.Body.setVelocity(this.body, 
             {x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
             break;
     case 83:var velocity = p5.Vector.fromAngle(angle-0.15);
             console.log(" s key pressed");
             velocity.mult(0.8);
             Matter.Body.setStatic(this.body, false);
             Matter.Body.setVelocity(this.body, 
             {x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
             break;
     case 90:var velocity = p5.Vector.fromAngle((angle-90)+0.40);//angle fixed
              console.log("z key pressed");
              velocity.mult(0.8);
              Matter.Body.setStatic(ball.body, false);
              Matter.Body.setVelocity(ball.body, 
              {x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
              break;
     case 88:var velocity = p5.Vector.fromAngle(angle+0.1);
              console.log("x key pressed");
              velocity.mult(0.8);
              Matter.Body.setStatic(ball.body, false);
              Matter.Body.setVelocity(ball.body,
              {x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
              break;
     default: console.log("WRONG KEY");break;
    }
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


