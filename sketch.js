console.log("hola mundo");


function setup() {
  createCanvas(600, 600);
  background(100, 0, 100);
  //background("blue");
  print("hola p5");
  fill(255);
  textAlign(CENTER);
textSize(32);
text("dibujando", width/2, 100);
  
  //utiliza los parametros de ellipse(x,y,w,h);
  
  //fill(200, 200, 0);
  noFill();
  //noStroke();
 // stroke(255);
 // strokeWeight(5);
 // ellipse(300, 300, 200, 200);
//  rectMode(CENTER);
 // rect(300, 300, 200, 200);
  
//  fill(100, 0, 100);
  // ellipse(300, 300, 200, 200);
  
  fill(255);
textAlign(CENTER);
textSize(32);
text("dibujando", width/2, 100);
  
}

function draw() {
  //background(220);
  fill(200, 200, 0)
  fill(random(100, 200) ,0, random(100,255), 20);
  noStroke();
 // ellipse(width/2, height/2, 100, 100);
  ellipse(mouseX, mouseY, 100, 100);
  //console.log(width);
}

function mousePressed(){
  console.log("clic");
  background(255, 0, 255);
  ellipse(mouseX, mouseY, 100, 100);
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("dibujando X2", width/2, 100);
}

function keyPressed(){
  console.log("key");
  background(255, 0, 255);

}


