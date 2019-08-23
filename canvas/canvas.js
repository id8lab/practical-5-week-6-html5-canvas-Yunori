window.onload = function() {
  var canvas, context
  var height, width
  canvas = document.getElementById('canvas')
  context = canvas.getContext('2d')

  var rect = {
    speed: 0,
    x: 20,
    y: 20,
    xSize: 100,
    ySize: 50,
    xDir: '-',
    yDir: '-',
    speed: 5
  }

  function move() {
    rect.xDir = (rect.x + rect.xSize) >= width ? '-' :
      rect.x <= 0 ? '+' :
      rect.xDir;
    rect.yDir = (rect.y + rect.ySize) >= height ? '-' :
      rect.y <= 0 ? '+' :
      rect.yDir;

    rect.x = rect.xDir == '+' ? rect.x += rect.speed : rect.x -= rect.speed;
    rect.y = rect.yDir == '+' ? rect.y += rect.speed : rect.y -= rect.speed;
  }

  function main() {
    function draw() {
      context.fillStyle = 'rgb(0,0,255)'
      context.fillRect(rect.x, rect.y, 100, 50)
      context.fillStyle = 'rgba(255, 0, 0, 0.5)'
      context.beginPath()
      context.arc(120, 150, 10, 0, 2 * Math.PI, false)
      context.fill()
    }

    height = canvas.clientHeight
    width = canvas.clientWidth

    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)

    context.lineWidth = 7

    draw();
    move();

    window.requestAnimationFrame(main);
  }

  main();
}
