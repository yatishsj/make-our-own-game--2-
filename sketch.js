// var top= createSprite(200, 0,400,2);
// var bottom= createSprite(200, 400,400,2);
// var left = createSprite(0, 200,2,400);
// var right = createSprite(400, 200,2,400);
var letterN;letterS;
// var blinky,cylde,inky,pinky,pacman;


function preload(){
letterN = loadImage("Images/n_11.png");
letterS = loadImage("Images/s_1.png")

// blinky = loadImage("Images/blinky.jpg");
//  cylde = loadImage("Images/cylde.png");
//   inky = loadImage("Images/inky.jpg");
//  pinky = loadImage("Images/pinky.jpg");
// pacman = loadImage("Images/pacman.jpg");

}

function setup(){
createCanvas (displayWidth,displayHeight);

var letterN_1 = createSprite(600,400,100,200);
letterN_1.addImage(letterN);
letterN_1.scale = 0.4;

var letterS_1 = createSprite(850,400,200,200);
letterS_1.addImage(letterS)
letterS_1.scale = 1.5;

obstacle_1 = createSprite(738,500,147,2)
obstacle_2 = createSprite(738,292,153,2)

// var blinky = createSprite(200,100,200,200);
// blinky.addImage(blinky)

// var cylde = createSprite(250,100,200,200);
// cylde.addImage(cylde)

// var inky = createSprite(300,100,200,200);
// inky.addImage(inky)

// var pinky = createSprite(350,100,200,200);
// pinky.addImage(pinky)

// var pacman = createSprite(400,100,200,200);
// pacman.addImage(pacman)

border_t = createSprite(200,0,12800,2);
border_t1 = createSprite(200,5,12800,2);

border_b = createSprite(200,719,12800,2);
border_b1 = createSprite(200,715,12800,2)

border_L = createSprite(0,700,1,12800);
border_L1 = createSprite(5,700,1,600);
border_L2 = createSprite(5,200,1,400)

border_R = createSprite(1279,0,1,12800);
border_R1 = createSprite(1274,0,1,700);
border_R2 = createSprite(1274,700,1,700);

obstacle_3 = createSprite(200,50,150,2);
obstacle_4 = createSprite(200,55,150,2);

obstacle_5 = createSprite(400,100,200,2);
obstacle_6 = createSprite(400,105,200,2);






}


function draw() {
background("black");
  fill("orange");
  rect(450,300,50,210);
  rect.scale = 1 ;

  
  
  
  
  
  createEdgeSprites();
  drawSprites();
  
  // inky.display();
  // pinky.display();
  // cylde.display();
  // blinky.display();
  // pacman.display();
  
}
