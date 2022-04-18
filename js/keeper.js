class Keeper
{
    constructor(x,y,w,h)
    {
    this.x = x;     
    this.y = y;     
    this.width = w;  
    this.height = h; 
    var options =  {isStatic: true};
    this.body = Bodies.rectangle(this.x, this.y, this.width,this.height, options);
    this.image = loadImage("stand.png");
    World.add(world, this.body);
    console.log("keeper function called");
   }
   
   keeperDive(ds)
   { //ds=1;
    switch(ds) 
     {
      case 1: this.image = loadImage("topleft.png");
              Matter.Body.setStatic(this.body, false);
              Matter.Body.applyForce(this.body,{x:0,y:0},{x:-0.5,y:-0.2})
              break;                                                  
        
      case 2: this.image = loadImage("topright.png");
              Matter.Body.setStatic(this.body, false);
              Matter.Body.applyForce(this.body,{x:0,y:0},{x:0.9,y:-0.4})
              break;
      case 3: this.image = loadImage("top-left-small.png");
              Matter.Body.setStatic(this.body, false);
              Matter.Body.applyForce(this.body,{x:0,y:0},{x:-0.3,y:-0.3})
              break;
      case 4: this.image = loadImage("top-right-small.png");
             Matter.Body.setStatic(this.body, false);
              Matter.Body.applyForce(this.body,{x:0,y:0},{x:0.3,y:-0.3})
              break;
      defaut: break;
     }
  }
   display(img) 
   {
     var angle = this.body.angle;
     var pos = this.body.position;
     push();
     imageMode(CENTER);
     image(this.image, pos.x, pos.y, this.r, this.r);
     pop();
 
  }
}  