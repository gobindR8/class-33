class Snow{
constructor(x,y){

this.body=Bodies.circle(x,y,5)
this.radius=5

World.add(world,this.body)

}


updateY(){

if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,800),y:random(200,600)})

}

}
showsnew(){
fill("red")
ellipseMode(CENTER)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)

}







}