
var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("assets/trex1.png", "assets/trex3.png", "assets/trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);

  edges=createEdgeSprites();

  //adicione dimensão e posição ao trex
  trex.scale=0.5;
  trex.x=50;
}

function draw(){
  //definir a cor do plano de fundo para branco
  background("white");

  //registrando a posição y do trex
  console.log(trex.y);

  //pular quando tecla de espaço for pressionada
  if(keyDown("space"))
  {
    trex.velocityY=-10;
  }

  trex.velocityY=trex.velocityY+0.5;
  
  //impede que o trex caia
  trex.collide(edges[3]);
  drawSprites();

}