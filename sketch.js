function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(199, random(150, 200), 133);

  circle(mouseX - 80, mouseY + 50, mouseX);
  strokeWeight(5);
  // noFill();
  stroke(mouseY, 255, 0);
  fill(mouseY, 0, 30);

  rect(mouseX, mouseY, 110, 110);
  strokeWeight(1);
  fill(150, 0, 150);
  stroke(mouseX, mouseY, 100, 100);
}
