
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,ground;
var backgroundImage,goalkeeper,targettopleft,targettopright,targetright,targetleft,target;
var ball,footballImage,targetImage,leftsaveImage,rightsaveImage;
var standsmallImage,topleftsaveImage,toprightsaveImage,topsaveImage;
var goalState=0; // this string will save the state which the goal keeper is currently on
var playerTarget; // this string will save the players current target
var aimSet = false; // this is the aim set boolean
var goal; // this will save the amount of goals we scored
var miss; // this will save the amount of goals we missed
var rand,ground,ball,balls=[];
var soundOle,whistle,cheering,win,lose;
var currentGame,keeper;
var diveSelection;
var hopeSoloImageSource;
var angle,target;

var attempt=0,score=0,scoresArr=[];
        // this is the list of the goal keeper positions saved as strings
//var goalkeeperPosition = ["left", "right", "topsave", "topleft", "topright"];

function preload() {
  backgroundImage = loadImage("background.png");
  standsmallImage=loadImage("stand.png");
  topleftsaveImage=loadImage("left.png");
  toprightsaveImage=loadImage("right.png");
  leftsaveImage=loadImage("left.png")
  rightsaveImage=loadImage("right.png")
  targetImage = loadImage("target.png");
  ballImage=loadImage("football.png");

  

  soundOle = loadSound("audio/oleole.mp3");
  whistle = loadSound("audio/whistle.mp3");
  cheering =loadSound("audio/cheering.mp3");
  win = loadSound("audio/win.mp3");
  lose = loadSound("audio/lose.mp3");

 }



function setup() {
  targettopleft=createSprite(windowWidth/2-300,windowHeight/2-210);
  targettopleft.addImage("targettopleft",targetImage)
  targettopleft.scale=0.2;
  //targettopleft.visible=false;

  targettopright=createSprite(windowWidth/2+350,windowHeight/2-210);
  targettopright.addImage("targettopright",targetImage)
  targettopright.scale=0.2;
  //targettopright.visible=false;

  targetleft=createSprite(windowWidth/2-400,windowHeight/2-80);
  targetleft.addImage("targetleft",targetImage)
  targetleft.scale=0.2;
  //targetleft.visible=false;

  targetright=createSprite(windowWidth/2+400,windowHeight/2-80);
  targetright.addImage("targetright",targetImage)
  targetright.scale=0.2;
  //targetright.visible=false;

  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  //soundOle.play();
  groundb = Bodies.rectangle(0, height - 10, width * 2, 70, { isStatic:true });
  World.add(world,groundb);

  //targettopleft=new Target(windowWidth/2-300,windowHeight/2-220,80);
 // targettopright=new Target(windowWidth/2+350,windowHeight/2-220,40);
 // targetright=new Target(windowWidth/2+400,windowHeight/2-80,40);
 // targetleft=new Target(windowWidth/2-350,windowHeight/2-80,40);

  ball = new Ball(windowWidth/2,windowHeight/2+200,50);
  keeper = new Keeper(windowWidth/2,windowHeight/2-50,50,50);

  World.add(world,ball);
  World.add(world,keeper);
 // World.add(world,targettopleft);
 
  angle=-PI/4;
  angleMode(RADIANS);
}

function draw() {
    Engine.update(engine);
    background(backgroundImage);
    //startGame();
    ball.display();
    keeper.display();
    if(ballcollisionWithTarget(keyCode)==true)
    {
      console.log("collison done")
    }
    collisionWithkeeper(ball,keeper);
     //targettopleft.display();
    // targettopright.display();
    // targetright.display();
    // targetleft.display();
    

    if(ball.body.position.y<windowHeight/2-180 ||
                    ball.body.position.x<windowWidth/2-400){
      Matter.Body.setVelocity(ball.body,{x:0,y:0})
      Matter.Body.setStatic(ball.body,true)
    }
    if(keeper.body.position.y<windowHeight/2-160 )
    {
      Matter.Body.setVelocity(keeper.body,{x:0,y:0})
      Matter.Body.setStatic(keeper.body,true)
    }

    drawSprites();
}

function startGame() {
  soundOle.stop();
  whistle.play();
  cheering.play();   
}
function getRandomInt() {
  var numArray = [1, 2, 3, 4];
  return numArray[Math.floor(Math.random() * numArray.length)];
}
function keyPressed()
{
    if(keyCode==65 || keyCode==83 || keyCode==88 || keyCode==90)
    {
      diveSelection=getRandomInt();
      ball.shootBall(keyCode,angle);
      keeper.keeperDive(diveSelection);
      
    }
 }

function ballcollisionWithTarget()
{
    var pos=ball.body.position;
    if(keyCode==65)
    {
      var d1 = dist(pos.x,pos.y,targettopleft.x,targettopleft.y);
    }
    else if(keyCode==83){

      var d2 = dist(pos.x,pos.y,targettopright.x,targettopright.y);
    }
    else if(keyCode==90)
    {
      var d3 = dist(pos.x,pos.y,targetleft.x,targetleft.y);
    }
    else if(keyCode==88)
    {
      var d4 = dist(pos.x,pos.y,targetright.x,targetright.y); 
    }
    console.log(keyCode);
    console.log("distance  ");
    console.log(d1);
    console.log(d2);
    console.log(d3);
    console.log(d4);
    if(d1<182||d2<100||d3<100||d4<200)
      {       
            return true; 
     }
     else
     {
       return false;
     }
            
}




// function keepercollisionWithTarget(keeper,sprite)
// {
//     var pos=ball.body.position;
//     var d = dist(pos.x,pos.y,sprite.x,sprite.y);
//     console.log(d);
//     if(d<81)
//       {       
//              return true; 
//      }
//      else
//      {
//        return false;
//      }
            
// }


function collisionWithkeeper(ball,keeper)
{ 
  var collision; 
      collision=Matter.SAT.collides(ball.body, keeper.body);
      if(collision.collided)
      {
        console.log("target collided");
        Matter.Body.setStatic(ball.body, true);
       // World.remove(world,ball.body);
      }
      else
      {
             return false;
      }
}
















// function ballcollisionWithTarget()
// {
//     var pos=ball.body.position;
//     var d = dist(pos.x,pos.y,sprite.x,sprite.y);
//     console.log(keyCode);
//     console.log("distance  ");
//     console.log(d);
//     if(d<81)
//       {       
//             return true; 
//      }
//      else
//      {
//        return false;
//      }
            
// }