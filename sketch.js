function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(170, 190), random(255, 200), 47, 20);

  circle(mouseX - 80, mouseY - 50, mouseX);
  strokeWeight(1);
  // noFill();
  stroke(mouseY, 255, 0);
  // fill(mouseY, 0, 30);

  rect(mouseX, mouseY, 500, 110);
  strokeWeight(1);
  // fill(150, 0, 150);
  stroke(mouseX, mouseY, 100, 100);
}
