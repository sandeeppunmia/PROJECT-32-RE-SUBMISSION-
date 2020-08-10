class Polygon {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:5
      }
      this.body = Bodies.circle(x,y,25,options);
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,70,70);    
       pop();
    }
  }