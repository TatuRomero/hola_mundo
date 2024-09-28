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
  frameRate(40);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(255, random(150, 200), 133, 50);
  // background(255, 69, 0);
  noStroke();

  // Cabeza de la calavera
  fill(0, 0, 128);
  ellipse(mouseX + 80, mouseY - 50, 250, 200);
  rect(mouseX + 80, mouseY + 30, 150, 100);

  // Ojos de la calavera
  fill(255, random(1, 68), 20, 255);
  ellipse(mouseX + 25, mouseY - 50, 50, 50);
  ellipse(mouseX + 135, mouseY - 50, 50, 50);

  // Dientes de la calavera
  fill(255, 165, 0);
  rect(mouseX + 35, mouseY + 55, 10, 50);
  rect(mouseX + 80, mouseY + 55, 10, 50);
  rect(mouseX + 125, mouseY + 55, 10, 50);
}
