
let squares=[];
let nums=[];
let found=0;
let level=0;
let clicked=0;
let c='#db9c95';

let speed= 500/(1+(0.25*level));
 
 
function setup() {
 createCanvas(windowWidth,windowHeight);
 background('#cad0d4');
 // Create objects
 stroke('#ffffff');
 strokeWeight(5);
 fill('#e3d9d7');
 rect((windowWidth-430)/2,(windowHeight-430)/2+20,430,430);
  stroke('#ffffff');
 strokeWeight(2);
 for (let x = 20; x <410; x+=100) {
   for (let y=20;y<410;y+=100){
     squares.push(new square((windowWidth-430)/2+x,(windowHeight-390)/2+y));
   }
 }
}

function cls(){
  if (level>100){
    return '#E9C4BF';
  }
  else if(level>90){
    return '#E8BFBA';
  }
  else if(level>80){
    return '#E6BAB5';
  }
  else if(level>70){
    return '#E4B5B0';
  }
  else if(level>60){
    return '#E2B0AA';
  }
  else if(level>50){
    return '#E0ABA5';
  }
  else if(level>40){
    return '#DFA6A0';
  }
  else if(level>30){
    return '#DDA19A';
  }
  else if(level>20){
    return '#D0948E';
  }
  else if(level>10){
    return '#C58C86';
  }
  else{
    return '#BA857F';
  }
}
 
function draw() {
 //background(50, 89, 100);
 for (let i = 0; i < squares.length; i++) {
   squares[i].display();}
  
}
 
function keyPressed(){
 flipping();
}
 
 
function flipping(){
 //handle flipping and storing flipped variables
 for(x=0;x<3;x++){
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
 setTimeout(() => {squares[num].color=color('#EBC9C5');}, speed)
}
 
class square{
 constructor(a,b){
   this.x=a;
   this.y=b;
   this.flipped=false;
   this.color='#EBC9C5';
 }
  display(){
   //what the sqaure looks like
   stroke('#fffff');
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
      textAlign(LEFT);
      level+=1;
      fill('#cad0d4');
      stroke('#cad0d4');
      rect(108,windowHeight/2-22,15,30);

      stroke('#fffff');
      fill('#c59893');
      text('Level '+level,20,windowHeight/2);
      reset();
    }
 }
}
 
function reset(){
 for(i=0; i<nums.length;i++){
   squares[nums[i]].color=color('#EBC9C5');
   squares[nums[i]].flipped=false;
 }
 nums=[];
 found=0;
 }

