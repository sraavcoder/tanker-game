class Front {
    constructor(x, y,width,angle) {
        var options = {
        isStatic: true,
        friction:1.5,
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = 50;
       
       World.add(world,this.body);
      };
  
      display(){
        var pos =this.body.position;
          rectMode(CENTER);
          rotate(this.body.angle);
          fill("red");
          rect(pos.x,pos.y,this.width,this.height);
  
      };
  }
  