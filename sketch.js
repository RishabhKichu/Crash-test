var car,wall;

var speed,weight,deformation;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX=speed;
  wall = createSprite(1200, 200, 60, height/2);
}

function draw() {
  background(0); 
  
  if(car.x-wall.x>car.width/2+wall.width/2){
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    console.log(deformation);

    if(deformation<100){
      car.shapeColor="green";
    }else if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }else if(deformation>180){
      car.shapeColor="red";
    }
  }

  drawSprites();
}