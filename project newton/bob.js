class Bob  {
    constructor(x,y,radius){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'dencity':1.0,
      }
      this.body = Bodies.ellips(x,y,radius,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("istockphoto-519187376-612x612-removebg-preview");
      World.add(world, this.body);
    }
  
    display() {
      var radius = this.body.radius;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  }