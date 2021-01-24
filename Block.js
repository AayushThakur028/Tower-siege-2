class Block{
    constructor(x, y, width, height) {
      this.visiblity=255;
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
          //u shuold not give , after last one.
        }
        //this is like {a,b,c}--> if u write {a,b,c,} then error
        //now check output once
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;//mam still error
        World.add(world, this.body);// hexagon image error.
      }
      display(){//ok mam
        if(this.body.speed<3){
          push();
          var angle = this.body.angle;
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,40,40);
          pop();
                }
        else{
          World.remove(world,this.body);
        
      }
}
}