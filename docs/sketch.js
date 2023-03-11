// Where is the car
class Carro{
  constructor(alto, ancho, color, name){
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  }
}

function setup() {
  createCanvas(800, 400);
  // Starts in the middle
  y = height - height/2;
  x = 0;
  let miCarro = new Carro (10, 60, (blue), "MiLambo");
  
  console.log("Canvas height is: " + this.height + "px");
  console.log("Canvas width is: " + this.width + "px");
  console.log("Width car is: " + miCarro.ancho + "px");
  console.log("Height car is: " + miCarro.alto + "px");
  console.log("Name car is: " + miCarro.name + "!");
}

function draw() {
  background(0);  
  display();
  move();
}

function move(){
  // Jiggling randomly
  y = y + random(-2, 2);
  
  if (x > width) {
    // Reset 
    x = 0;
    y = height - height /2;
  } else {
    // Moving up at a constant speed
    x = x + 4;
  }
}

function display(){
  // Draw a car
  stroke(255);
  fill(69,245,195);
  rect(x, y, 60, 10);
}
