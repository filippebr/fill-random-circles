const WIDTH = 400;
const HEIGHT = 400;

const doc = document;
const canvas = doc.createElement('canvas');
const ctx = canvas.getContext('2d');

class Circle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function main() {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  doc.body.appendChild(canvas);

  init();

  var loop = function() {
    draw();
    window.requestAnimationFrame(loop, canvas);
  }
  window.requestAnimationFrame(loop, canvas);
}

function genRan(val1, val2) {
  var ranNum = Math.floor(Math.random()*((val2 - val1) + 1)) + val1;
  return ranNum;
}

function createColor() {
  let color = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
  };

  let rgba;

  color.red   = genRan(0, 255);
  color.green = genRan(0, 255);
  color.blue  = genRan(0, 255);
  color.alpha = genRan(1, 10)/10;

  rgba = 'rgba('+color.red+', '+color.green+', '+color.blue+', '+color.alpha+')';

  return rgba;
}

function createCircle() {
  let radius = genRan(WIDTH / 20, WIDTH / 5);
  let posX = genRan(radius, WIDTH - radius);
  let posY = genRan(radius, HEIGHT - radius);
  let color = createColor();

  let circle = new Circle(posX, posY, radius, color);

  return circle;
}

function drawBackground() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function init() {
  drawBackground();
}

function draw() {
  let circle = createCircle();

  circle.draw();
}

main();
