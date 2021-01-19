class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.3,
          'friction':5.0,
          'density':1.0
      }
     
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options); 
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("black");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };