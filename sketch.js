var erojo,erojoAnimation;
var eazul,eazulAnimation;

function preload(){
  
  erojoAnimation= loadAnimation("./image/enemigo_rojo.png","./image/enemigo_rojo_der_abajo.png","./image/enemigo_rojo_izq_abajo.png");
  eazulAnimation= loadAnimation("./image/enemigo_azul.png","./image/enemigo_azul_der_abajo.png","./image/enemigo_azul_izq_abajo.png");
  
}

function setup() {
  createCanvas(600, 700);
  
  erojo= createSprite(50,180,20,50);
  erojo.addAnimation("erojo",erojoAnimation);
  erojo.scale=1.5;
  
  eazul = createSprite(100,180,20,50);
  eazul.addAnimation("eazul",eazulAnimation);
  eazul.scale=1.5;
 
  
}

function draw() {
  background(180);

 
  drawSprites();
}

