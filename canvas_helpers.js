function drawTriangle(points, ctx) {
  ctx.beginPath();

  for (let i = 0; i < points.length; i++) {
    ctx.moveTo(...points[i]);
    ctx.lineTo(...points[(i + 1) % points.length]);
  }
  ctx.stroke();
}

function drawPoint(x, y, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, 1, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}
