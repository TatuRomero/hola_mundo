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
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(75, 61, 130);
  elipse(mouseX + 80, mouseY - 50, 65, 50);
  fill(255, 0, 255);
  noStroke();
}
