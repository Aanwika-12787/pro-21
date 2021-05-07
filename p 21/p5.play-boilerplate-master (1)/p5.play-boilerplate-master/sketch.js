var car,wall,car1;
var speed,weight

function setup() {
  speed=random (55,90)
  weight=random(400,1500)
  car=createSprite(300,200,50,50)
  car1=createSprite(50,200,50,50)
  wall=createSprite(800,200,60,height/2)
  car.velocityX=speed;
  car1.velocityX=speed;
 
  }

  


function draw() {
  background(255,255,255); 
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22509}
    if(deformation>180 && deformation>100){
      car.shapeColor= color (230,230,0)
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