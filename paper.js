class Paper {
    constructor(x, y, radius1, radius2) {
      var options = {
          isStatic: false,
          'restitution': 0.2,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, radius1, radius2, options);
      this.radius1 = radius1;
      this.radius2 = radius2;

      this.image = loadImage("Sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      
      image(this.image, 0, 0, this.radius1, this.radius2);
      pop();
    }
  };