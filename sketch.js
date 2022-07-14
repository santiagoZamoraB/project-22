var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hada, hadaB
var hadaImage

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	hadaImage = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada
	hada = createSprite(100, 600);
	hada.addAnimation("normal", hadaImage);
	hada.scale = 0.20;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y> 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyCode === LEFT_ARROW){
		hada.x = hada.x -10;
	}
	if(keyCode === RIGHT_ARROW){
		hada.x = hada.x + 10
	}
	
}
