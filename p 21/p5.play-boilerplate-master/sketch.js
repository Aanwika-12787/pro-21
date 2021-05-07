var car,wall,car1;
var speed,weight
var thickness


function setup() {
  createCanvas(1600,400);
  speed=random (223,321)
  weight=random(30,52)
  car=createSprite(300,200,50,5)
  car.shapeColor= "white"
  thickness=random(22,83)
 // car1=createSprite(50,200,50,5)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor= color(80,80,80)
  car.velocityX=speed;
  car1.velocityX=speed;
 
  }

  


function draw() {
  background(255,255,255); 
  createSprite(400, 200, 50, 50);
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22509}
    if(deformation>180 && deformation>100){
      car.shapeColor= color (255,255,255)
          }
          if (deformation<100){
            car.shapeColor=color(0,255,0)
          }

  if(wall.x-car1.x<(car1.width+wall.width)/2){
    car1.velocityX=0
    var deformation=0.5*weight*speed*speed/22509}
    if(deformation>180 && deformation>100){
    car1.shapeColor= color (230,230,0)
    }
    if (deformation<100){
    car1.shapeColor=color(0,255,0)
   }


  drawSprites();
}