class Box{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            'restitution':1,
            'friction':1,
            'density':2
        }
         this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("PinkSquare.png");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,30,30);    
         pop();

      if(this.body.speed<3){
        this.Visiblity = 255;
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,30,30);
        pop();
      }
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity >= -105){
        score++;
      }
    }
  };