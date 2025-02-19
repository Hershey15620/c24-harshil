class Dustbin {
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true,
            restitution:0.5,
            friction:2.0,
            density:0.9
        }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;

    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)



    }

    display (){
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();   
    }

}