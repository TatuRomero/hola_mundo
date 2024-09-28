// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(40);
//   background(0);
//   rectMode(CENTER);
// }

// function draw() {
//   background(random(199, 200), random(150, 200), 133, 50);

//   circle(mouseX + 80, mouseY - 50, mouseX);
//   strokeWeight(5);
//   // noFill();
//   stroke(mouseY, 255, 0);
//   fill(mouseY, 0, 30);

//   rect(mouseX, mouseY, 110, 110);
//   strokeWeight(1);
//   fill(150, 0, 150);
//   stroke(mouseX, mouseY, 100, 100);
// }

// Tarea: Realizar un cursor personalizado.
// Para este proyecto se realizará una calavera.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  ellipse(250, 200, 300, 200);
  fill(255);
  noStroke();
  Reflect(175, 250, 150, 100);
  fill(0);
  ellipse(175, 200, 50, 50);
  ellipse(325, 200, 50, 50);
  rect(200, 300, 10, 50);
  rect(250, 300, 10, 50);
  rect(300, 300, 10, 50);
}
