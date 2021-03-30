var wall,bullet;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,5);
   speed= random(220,320);
  weight= random(30,50);
 bullet.velocityX=speed;
 bullet.shapeColor="white";
thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor="green";
}
function hasCollided(lbullet, lwall) {
	bulletRightEdge=lbullet.x +lbullet.width; 
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge) {
	return true 
  } return false; 
}
function draw() {
  background(0,0,0);  
 
if (hasCollided(bullet,wall)){
	bullet.velocityX=0;
	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
	if(damage>10){
		wall.shapeColor="red";
	}
	if(damage<10){
		wall.shapeColor="green";
	}
}
  drawSprites();
}