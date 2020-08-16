var player, maskGroup,sanitizerGroup, glovesGroup,houseGroup, washHandsGroup,peopleGroup,covidGroup, flagGroup,appsGroup, scores= 0;
var life =3, gameState= "start", mask1, sanitizer1, gloves1,house1, covid1, washHands1, people1, apps1, flag1, vaccine1, time = 15,player1,heart, timeScore= 15;
function preload(){
  mask1 = loadImage("masksketch.png"); 
  sanitizer1 = loadImage("sanitizersketch.png");
  gloves1 = loadImage("glovesketch.png");
  house1 = loadImage("housesketch.png");
  covid1 = loadImage("covidsketch.png");
  washHands1= loadImage("wash hands sketch.png");
   people1= loadImage("people sketch (1).png");
   apps1 = loadImage("tiktoksketch.png");
   flag1 = loadImage("chineseflag.png");
   vaccine1 = loadImage("vaccine sketch (1).png");
   player1= loadImage("square.png");
   heart= loadImage("heart.png");
}
  function setup() {
  createCanvas(windowWidth,windowHeight);
  f1=  new Form();
  player= createSprite(400,800,30,30);
  player.addImage("player",player1);
  player.setCollider('rectangle',0,-290,200,10);
  player.scale= 0.3;
  player.visible= false;
  player.debug= true;
  maskGroup = new Group();
  sanitizerGroup= new Group();
  glovesGroup= new Group();
  houseGroup = new Group();
  washHandsGroup= new Group();
  peopleGroup= new Group();
  covidGroup= new Group();
  flagGroup= new Group();
  appsGroup= new Group();
}
function draw() {
  background("skyblue");
  if(gameState=="start"){
       f1.display();
}
  if(gameState=="play"){
    player.visible= true;
    player.scale= 0.25;
    textSize(190);
    text(scores,350,400);
    textSize(20);
    if(life==3){
      image(heart,20,20,80,50);
      image(heart,50,20,80,50);
      image(heart,80,20,80,50);
 } else if(life==2){
      image(heart,20,20,80,50);
      image(heart,50,20,80,50);}
    else if(life==1){
      image(heart,20,20,80,50);}
  mask();
  sanitizer();
  gloves();
  house();
  washHands();
  people();
  covid();
  flag();
  apps();
  if(maskGroup.isTouching(player)||sanitizerGroup.isTouching(player)||glovesGroup.isTouching(player)
  ||houseGroup.isTouching(player)||washHandsGroup.isTouching(player)){
      scores= scores+1;}
  if(peopleGroup.isTouching(player)||covidGroup.isTouching(player)||flagGroup.isTouching(player)
  ||appsGroup.isTouching(player)){
    time= time-1;
    if(life>0 ){
      life= life-1;
      time= 15;
      }}
  if(life==0){
    gameState= "over";
  }}
  if(gameState=="over"){
    textSize(190);
    text(scores,350,400);
    textSize(20);
    maskGroup.destroyEach();
    sanitizerGroup.destroyEach();
    houseGroup.destroyEach();
    washHandsGroup.destroyEach();
    glovesGroup.destroyEach();
    peopleGroup.destroyEach();
    appsGroup.destroyEach();
    flagGroup.destroyEach();
    covidGroup.destroyEach();
     if(scores<50){
      text('You are not aware about Covid-19',240,450)
      text('Press the yellow button to restart the game',210,500);
    }}
  player.x= mouseX;
  drawSprites();
}
function mask(){
  if(frameCount%150==0){
      var m = createSprite(300,0,20,20);
      m.addImage("m",mask1);
      m.scale= 0.17;
      m.x = random(20,775);
      m.velocityY = random(9,11);
      m.lifetime= 800/m.velocityY;
      maskGroup.add(m);
     }
  maskGroup.setColliderEach("rectangle",0,0,10,10);
}
function sanitizer(){
  if(frameCount%300==0){
      var s = createSprite(230,0,20,20);
      s.addImage("s",sanitizer1);
      s.scale= 0.5;
      s.x = random(20,775);
      s.velocityY = random(7,10);
      s.lifetime= 800/s.velocityY;
      sanitizerGroup.add(s);
  }
  sanitizerGroup.setColliderEach("rectangle",0,0,10,10);
}
function gloves(){
  if(frameCount%250==0){
      var g = createSprite(300,0,20,20);
      g.addImage("g",gloves1);
      g.scale= 0.2;
      g.x = random(20,775);
      g.velocityY = random(8,12);
      g.lifetime= 800/g.velocityY;
      glovesGroup.add(g);
  }
  glovesGroup.setColliderEach("rectangle",0,0,10,10);
}
function house(){
  if(frameCount%150==0){
      var h = createSprite(300,0,20,20);
      h.addImage("h",house1);
      h.scale= 0.2;
      h.x = random(20,775);
      h.velocityY = random(8,11);
      h.lifetime= 800/h.velocityY;
      houseGroup.add(h);
  }
  houseGroup.setColliderEach("rectangle",0,0,10,10);
}
function washHands(){
  if(frameCount%150==0){
      var w = createSprite(300,0,20,20);
      w.addImage("w",washHands1);
      w.scale=0.17;
      w.x = random(20,775);
      w.velocityY = random(7,10);
      w.lifetime= 800/w.velocityY;
      washHandsGroup.add(w);
  }
  washHandsGroup.setColliderEach("rectangle",0,0,10,10);
}
function people(){
  if(frameCount%200==0){
      var p = createSprite(300,0,20,20);
      p.addImage("p",people1); 
      p.scale= 0.25;
      p.x = random(20,775);
      p.velocityY = random(7,12);
      p.shapeColor= "red";
      p.lifetime= 800/p.velocityY;
      peopleGroup.add(p);
  }
      peopleGroup.setColliderEach("rectangle",0,0,10,10);
}
function covid(){
  if(frameCount%100==0){
      var c = createSprite(300,0,20,20);
      c.addImage("c",covid1);
      c.scale= 0.15;
      c.x = random(20,775);
      c.velocityY = random(8,10);
      c.lifetime= 800/c.velocityY;
      covidGroup.add(c);
  }
  covidGroup.setColliderEach("rectangle",0,0,10,10);
}
function flag(){
  if(frameCount%300==0){
      var f = createSprite(300,0,20,20);
      f.addImage("f",flag1);
      f.scale= 0.22;
      f.x = random(20,775);
      f.velocityY = random(8,12);
      f.lifetime= 800/f.velocityY
      flagGroup.add(f);
  }
  flagGroup.setColliderEach("rectangle",0,0,10,10);
}
function apps(){
  if(frameCount%170===0){
      var a = createSprite(300,0,20,20);
     a.addImage("a",apps1);
     a.scale= 0.3;
      a.x = random(20,775);
      a.velocityY = random(7,13);
      a.shapeColor= "red";
      a.lifetime= 800/a.velocityY
      appsGroup.add(a);
   }
  appsGroup.setColliderEach("rectangle",0,0,10,10);
}
function keyPressed(){
    if(keyCode===32 && gameState=== "over"){
        gameState= "play";
        life=3;
        scores=0;
    }}
