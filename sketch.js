function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(128, 100), random(180, 200), 130, 255);

  circle(mouseX - 80, mouseY, 10);
  strokeWeight(1);
  noFill();
  stroke(mouseY, 10, 0);
  // fill(mouseY, 0, 30);

  rect(mouseX, mouseY, 110, 110);
  strokeWeight(1);
  // fill(150, 0, 150);
  stroke(mouseX, mouseY, 100, 100);
}
