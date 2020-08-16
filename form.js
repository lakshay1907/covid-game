class Form {
    constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
    this.greeting = createElement('h3');
    this.greeting1 = createElement('h3');
    this.greeting2= createElement('h3');
    this.greeting3= createElement('h3');
    this.greeting4= createElement('h3');
    this.greeting5= createElement('h3');
    this.greeting6= createElement('h3');
    this.greeting7= createElement('h3');}
    hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.greeting1.hide();
    this.greeting2.hide();
    this.greeting3.hide();
    this.greeting4.hide();
    this.greeting5.hide();
    this.greeting6.hide();
    this.greeting7.hide();}
 display(){
    this.title.html("Covid Run");
    this.title.position(width/2.2,0);
    this.input.position(width/2.8,height/2+ 100);
    this.button.position(width/2.8,height/2+ 140);
    this.greeting.html("This game is designed for spreading awarness against Covid-19 ");
    this.greeting.position(width/2.8,height/8);
    this.greeting1.html("Rules:");
    this.greeting1.position(width/2.8,height/6+ 20);
    this.greeting2.html('1. You will have three lives');
    this.greeting2.position(width/2.8,height/6+ 70);
    this.greeting3.html('2. You need minimum of 50 points to be aware about Covid-19');
    this.greeting3.position(width/2.8,height/6 + 120);
    this.greeting4.html('3. If you touch negative things then live will decrease');
    this.greeting4.position(width/2.8,height/6 + 170);
    this.greeting5.html('4. If you touch positive things then score will increase');
    this.greeting5.position(width/2.8,height/6 + 220);
    this.greeting6.html('5. You can move the player right and left');
    this.greeting6.position(width/2.8,height/6 + 270);
    this.greeting7.html('6. Enter your name below to start the game');
    this.greeting7.position(width/2.8,height/6 + 320);
    this.button.mousePressed(()=>{
    this.hide();
   gameState="play";})}}
