
//easy -->db9c95
//medium-->d9a29c
//hard --> dbaca7
//hardest --> dbb6b2

let squares=[];
let nums=[];
let found=0;
let level=0;
let clicked=0;
 
//easy -->db9c95
//medium-->d9a29c
//hard --> dbaca7
//hardest --> dbb6b2
 
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
 console.log(nums);
}
 
function myfunc(num){
 console.log(num);
 squares[num].color=color('#c59893');
 squares[num].flipped=true;
 console.log(squares[num].flipped);
 setTimeout(() => {squares[num].color=color('#dbb8b4');}, 500)
}
 
class square{
 constructor(a,b){
   this.x=a;
   this.y=b;
   this.flipped=false;
   this.color=color('#dbb8b4');
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
     squares[i].color=color('#c59893');
     found+=1;
   }
   else{
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
   squares[nums[i]].color=color('#dbb8b4');
   squares[nums[i]].flipped=false;
 }
 nums=[];
 found=0;
 }
