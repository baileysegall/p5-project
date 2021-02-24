
let squares=[];
let nums=[];
let found=0;
let level=0;
let clicked=0;
let img;
let speed= 500/(1+(0.25*level));
 

function setup() {
 createCanvas(windowWidth,windowHeight);
 background('#E3EEF5');
 //background('#ffffff');
 //add header
 img=loadImage('Mems.png');
 // Create objects
 stroke('#a7c1d4');
 strokeWeight(5);
 fill('#bfd3e2');
 rect((windowWidth-430)/2,(windowHeight-430)/2+20,430,430);
 stroke('#a7c1d4');
 strokeWeight(2);
 for (let x = 20; x <410; x+=100) {
   for (let y=20;y<410;y+=100){
     squares.push(new square((windowWidth-430)/2+x,(windowHeight-390)/2+y));
   }
 }
}

function cls(){
  if (level>100){
    return '#CCDBE5';
  }
  else if(level>90){
    return '#C2CFD9';
  }
  else if(level>80){
    return '#B7C4CD';
  }
  else if(level>70){
    return '#ACB8C1';
  }
  else if(level>60){
    return '#A1ADB5';
  }
  else if(level>50){
    return '#97A1A9';
  }
  else if(level>40){
    return '#8C969D';
  }
  else if(level>30){
    return '#818A91';
  }
  else if(level>20){
    return '#767F85';
  }
  else if(level>10){
    return '#6C7379';
  }
  else{
    return '#61676C';
  }
}
 
function draw() {
 //background(50, 89, 100);
 image(img, (windowWidth/2)-(img.width/4), 50, img.width/2, img.height/2);
 for (let i = 0; i < squares.length; i++) {
   squares[i].display();}
  
}
 
function keyPressed(){
 flipping();
}
 
 
function flipping(){
 //handle flipping and storing flipped variables
 for(x=0;nums.length<3;x++){
   let truth = false;
   let temp=int(random(0,squares.length-1))
   for(i=0;i<nums.length;i++){
     if(temp==nums[i]){
       truth=true;
     }
   }
   if(!truth){
     append(nums,temp);}
 }
 nums.forEach(myfunc)
}
 
function myfunc(num){
 squares[num].color=color(cls());
 squares[num].flipped=true;
 setTimeout(() => {squares[num].color=color('#d7e6f1');}, speed)
}
 
class square{
 constructor(a,b){
   this.x=a;
   this.y=b;
   this.flipped=false;
   this.color='#d7e6f1';
 }
  display(){
   //what the sqaure looks like
   stroke('#a7c1d4');
   fill(this.color)
   rect(this.x,this.y,90,90);
 }
}
 









function isInRectangleArray(x,y, rect){
 if(x>=rect.x && x<=rect.x+90 &&y>=rect.y && y<=rect.y+90 && rect.flipped==true){
   return true;
 }
 else{
   return false;
 }
}
 
function mouseClicked(){
 let x=mouseX;
 let y=mouseY;
 clicked+=1;
 
  for (i=0; i<squares.length; i++){
   if(isInRectangleArray(x,y,squares[i])){
     squares[i].color=color(cls());
     found+=1;
   }
    if(found==nums.length && found>0){
      textSize(32);
      textAlign(CENTER);
      level+=1;

      stroke('#E3EEF5');
      fill('#E3EEF5');
      rect(0,370,windowWidth,30);
      
      stroke('#a7c1d4');
      fill('#bfd3e2');
      text('Level',windowWidth/2,((windowHeight-430)/2)-50);
      text(level, windowWidth/2,((windowHeight-430)/2)-20);

      reset();
    }
    
    if(clicked>3){
      fill('#ffffff');
     rect(0,0,windowWidth, windowHeight);
  
   for(i=0; i<squares.length;i++){
     squares[i].color=color('#ffffff');
     textSize(60);
     textAlign(CENTER);
     fill('#c59893');
     text('GAME OVER',windowWidth/2,50);
    
     }
    }
 }
}
 
function reset(){
 for(i=0; i<nums.length;i++){
   squares[nums[i]].color=color('#d7e6f1');
   squares[nums[i]].flipped=false;
 }
 nums=[];
 found=0;
 clicked=0;
 }