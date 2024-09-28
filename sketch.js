function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(150, 250), random(150, 200), 150, 20);

  strokeWeight(5);
  noFill();
  stroke(mouseY, 255, 0);
  fill(mouseY, 0, 30);
  circle(mouseX + 80, mouseY, mouseX);

  strokeWeight(1);
  rect(mouseX, mouseY, 110, 110);
  fill(150, 0, 150);
  stroke(mouseX, mouseY, 100, 100);
}
