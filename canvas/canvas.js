window.onload = function() {
  var canvas, context;
  var height, width;
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  var rect = {
    speed: 0,
    x: 20,
    y: 20,
    xSize: 100,
    ySize: 50,
    xDir: '-',
    yDir: '-',
    speed: 5
  };

  function draw() {
    context.fillStyle = 'rgb(0,0,255)';
    context.fillRect(rect.x, rect.y, 100, 50);
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context.beginPath();
    context.arc(120, 150, 10, 0, 2 * Math.PI, false);
    context.fill();
  }

  function move(obj) {
    obj.xDir = (obj.x + obj.xSize) >= width ? '-' :
      obj.x <= 0 ? '+' :
      obj.xDir;
    obj.yDir = (obj.y + obj.ySize) >= height ? '-' :
      obj.y <= 0 ? '+' :
      obj.yDir;

    obj.x = obj.xDir == '+' ? obj.x += obj.speed : obj.x -= obj.speed;
    obj.y = obj.yDir == '+' ? obj.y += obj.speed : obj.y -= obj.speed;
  }

  function main() {
    height = canvas.clientHeight;
    width = canvas.clientWidth;
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    move(rect);
    draw();

    window.requestAnimationFrame(main);
  }

  draw(); //init
  main();
}
