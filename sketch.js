var H_img;
var H;
var appState=0;
function preload()
{
  H_img=loadImage("Images/H.png");

}

function setup()
 {
   createCanvas(800,400);
   back=createButton("Back");
   back.position(0,0);
   back.hide()
   H= createSprite(200,200,30,30);
   h=new Hydrogen();
}

function draw() 
{
  background("Blue");  
  H.addImage(H_img);

  if(appState=0)
  {
      H.life=-1;
      back.hide();
  }
  else
  {
    back.position(100,100);
    H.life=0
  }
  if(back.mousePressed())
  {
    appState=0;
  }
  if(mouseIsPressedOver(H))
  {
    gameState=1;
    h.display();
  }
  drawSprites();
}