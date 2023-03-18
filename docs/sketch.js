class Carro {
  constructor(x, y, speed, direction, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 50;
    this.height = 30;
    this.isJumping = false;
    this.jumpSpeed = 10;
    this.jumpHeight = 100;
    this.direction = direction; // Nueva propiedad para indicar la dirección del carro
    this.color = "white"
  }

  move() {
    this.x += this.speed * this.direction;
    if (this.x > width - 50 || this.x < 0) {
      this.direction = -this.direction;
    }
    if (this.isJumping) {
      this.y -= this.jumpSpeed;
      if (this.y <= height - this.jumpHeight) {
        this.isJumping = false;
      }
    } else if (this.y < height - this.height) {
      this.y += this.jumpSpeed;
    }
  }

  display() {
    /*
    stroke(255);
    if (this.direction > 0) { // Si el carro se mueve de izquierda a derecha
      fill(255, 0, 0); // Establecer color rojo
    } else { // Si el carro se mueve de derecha a izquierda
      fill(0, 255, 0); // Establecer color verde
    }
    rect(this.x, this.y, this.width, this.height);
    */
    stroke(255);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    
  }
}

let carro1, carro2;

function setup() {
  createCanvas(400, 200);
  carro1 = new Carro(0, height / 2, 3, 1);
  carro2 = new Carro(width - 50, height / 2, 3, -1);
  carro1.color = "aqua"
  carro2.color = "purple"
}

function draw() {
  background(0);
  carro1.move();
  carro1.display();
  carro2.move();
  carro2.display();
}

function keyPressed() {
  if (keyCode === 32) {
    if (!carro1.isJumping) {
      carro1.isJumping = true;
    }
  }
}
