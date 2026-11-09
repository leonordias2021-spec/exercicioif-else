function setup() {
  createCanvas(600, 400);
}

function draw() {
  let noite;
  if (mouseX < width / 2) {
    background(15, 20, 50);
    noite = true;
  } else {
    background(135, 206, 250);
    noite = false;
  }

  if (noite) {
    fill(255);
    circle(80, 60, 4);
    circle(200, 120, 3);
    circle(120, 60, 3);
    circle(350, 50, 4);
    circle(500, 100, 3);
    circle(120, 300, 3);
    circle(450, 330, 4);
  
  }
  if (noite) {
    if (mouseIsPressed) {
      fill(255, 255, 200);
    } else {
      fill(220, 220, 235);
    }
  } else {
    if (mouseIsPressed) {
      fill(255, 140, 0);
      fill(255, 220, 50);       
    }
  }
  let tamanho;
  if (mouseY < height / 2) {
    tamanho = 60;
  } else {
    tamanho = 120;
  }

  circle(mouseX, mouseY, tamanho);
}