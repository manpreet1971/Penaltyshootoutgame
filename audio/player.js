class Player{
    constructor(x,y) 
    {
      var options = {
        isStatic: true     
     };
      this.r = 20;
      this.body = Bodies.rectangle(x, y, this.r, options);
      this.image = loadImage("stand-small.png");
      
      World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    
        
      }
}