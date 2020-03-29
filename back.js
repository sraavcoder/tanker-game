class Back {
    constructor(x, y,diameter) {
        var options = {
        isStatic: true,
        friction:50000,
       }
       this.body = Bodies.circle(x,y,diameter);
       this.diameter = diameter;
       World.add(world,this.body);
      };
  
      display(){
        var pos =this.body.position;
          ellipseMode(CENTER);
          fill("red");
          ellipse(pos.x,pos.y,this.diameter*2);
  
      };
  }